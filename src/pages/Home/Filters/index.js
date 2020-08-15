import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Form } from '@unform/web';

import axios from 'axios';

import TextFilter from './TextFilter';
import SelectFilter from './SelectFilter';
import DateFilter from './DateFilter';

function Filters({ onSubmit }) {
    const filterEndpoint = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

    const [filters, setFilters] = useState([]);
    const formRef = useRef(null);

    const getForm = useCallback(() => {
        return formRef;
    }, [formRef]);

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
            {filters.map((filter) => {
                if (filter.type === 'SELECT') {
                    return (
                        <SelectFilter
                            key={filter.id}
                            name={filter.id}
                            options={filter.values.map(({ name, value }) => ({
                                value,
                                label: name,
                            }))}
                            onChange={() => formRef.current.submitForm()}
                        />
                    );
                }

                if (filter.type === 'DATE') {
                    return (
                        <DateFilter
                            key={filter.id}
                            name={filter.id}
                            getParentForm={getForm}
                            // onChange={() => formRef.current.submitForm()}
                        />
                    );
                }

                return (
                    <TextFilter
                        key={filter.id}
                        name={filter.id}
                        type={filter.type.toLowerCase()}
                        label={filter.name}
                        onChange={() => formRef.current.submitForm()}
                    />
                );
            })}
        </Form>
    );
}

export default Filters;
