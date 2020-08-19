import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import * as Yup from 'yup';

import axios from 'axios';

import TextFilter from './TextFilter';
import SelectFilter from './SelectFilter';
import DateFilter from './DateFilter';

import { StyledForm } from './styles';

function Filters({ onSubmit }) {
    const filterEndpoint = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

    const [filters, setFilters] = useState([]);

    const [params, setParams] = useState({
        limit: 20,
        offset: 1,
    });
    const [select, setSelect] = useState(null);
    const [timestamp, setTimestamp] = useState('');
    const formRef = useRef(null);

    const handleTextChange = useCallback((event) => {
        const { name, value } = event.target;
        setParams((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    const handleSelectChange = useCallback((event) => {
        setSelect(event.target.value);
    }, []);

    const handleDateChange = useCallback((date) => {
        const formatedTimestamp = format(date, "yyyy-MM-dd'T'HH:mm:ss");
        setTimestamp(formatedTimestamp);
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const data = formRef.current.getData();

                formRef.current.setErrors({});

                const schema = Yup.object().shape({
                    locale: Yup.string(),
                    country: Yup.string(),
                    timestamp: Yup.date(),
                    limit: Yup.number()
                        .nullable(true)
                        .transform((v, o) => (o === '' ? null : v))
                        .min(1, 'Deve ser maior que 1')
                        .max(50, 'Deve ser menor que 50'),
                    offset: Yup.number()
                        .nullable(true)
                        .transform((v, o) => (o === '' ? null : v)),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                formRef.current.submitForm();
            } catch (err) {
                const validationErrors = {};

                if (err instanceof Yup.ValidationError) {
                    err.inner.forEach((error) => {
                        validationErrors[error.path] = error.message;
                    });

                    formRef.current.setErrors(validationErrors);
                }
            }
        })();
    }, [params, select, timestamp]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(filterEndpoint);
                const dinamicParams = {};

                const newFilters = data.filters.map((filter) => {
                    if (filter.values) {
                        return {
                            ...filter,
                            type: 'SELECT',
                        };
                    }

                    if (filter?.validation?.entityType) {
                        if (filter.validation.entityType === 'DATE_TIME') {
                            return {
                                ...filter,
                                type: 'DATE',
                            };
                        }
                    }

                    if (filter?.validation?.primitiveType) {
                        if (filter.validation.primitiveType === 'INTEGER') {
                            dinamicParams[filter.id] = '';
                            return {
                                ...filter,
                                type: 'NUMBER',
                            };
                        }
                    }
                });

                setParams(dinamicParams);
                setFilters(newFilters);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <StyledForm ref={formRef} onSubmit={onSubmit}>
            {filters.map((filter) => (
                <div key={filter.id} className="unform__field">
                    {filter.type === 'SELECT' && (
                        <SelectFilter
                            key={filter.id}
                            name={filter.id}
                            label={filter.name}
                            options={filter.values.map(({ name, value }) => ({
                                value,
                                label: name,
                            }))}
                            onChange={handleSelectChange}
                        />
                    )}

                    {filter.type === 'DATE' && (
                        <DateFilter
                            key={filter.id}
                            name={filter.id}
                            onTimestampChange={handleDateChange}
                        />
                    )}

                    {filter.type === 'NUMBER' && (
                        <TextFilter
                            key={filter.id}
                            name={filter.id}
                            type={filter.type.toLowerCase()}
                            label={filter.name}
                            onChange={handleTextChange}
                        />
                    )}
                </div>
            ))}
        </StyledForm>
    );
}

Filters.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Filters;
