import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { format } from 'date-fns';

import axios from 'axios';

import TextFilter from './TextFilter';
import SelectFilter from './SelectFilter';
import DateFilter from './DateFilter';

function Filters({ onSubmit }) {
    const filterEndpoint = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

    const [filters, setFilters] = useState([]);

    const [text, setText] = useState(null);
    const [select, setSelect] = useState(null);
    const [timestamp, setTimestamp] = useState('');
    const formRef = useRef(null);

    const handleTextChange = useCallback((event) => {
        setText(event.target.value);
    }, []);

    const handleSelectChange = useCallback((event) => {
        setSelect(event.value);
    }, []);

    const handleDateChange = useCallback((date) => {
        const formatedTimestamp = format(date, "yyyy-MM-dd'T'HH:mm:ss");
        setTimestamp(formatedTimestamp);
    }, []);

    useEffect(() => {
        formRef.current.submitForm();
    }, [text, select, timestamp]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(filterEndpoint);
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
                            return {
                                ...filter,
                                type: 'NUMBER',
                            };
                        }
                    }
                });

                setFilters(newFilters);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <Form ref={formRef} onSubmit={onSubmit}>
            {filters.map((filter) => (
                <>
                    {filter.type === 'SELECT' && (
                        <SelectFilter
                            key={filter.id}
                            name={filter.id}
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
                </>
            ))}
        </Form>
    );
}

export default Filters;
