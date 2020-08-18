import React, { useRef, useEffect } from 'react';
import Select from 'react-select';
import { useField } from '@unform/core';

export default function SelectFilter({ name, ...rest }) {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref) => {
                if (!ref.state.value) {
                    return '';
                }
                return ref.state.value.value;
            },
        });
    }, [fieldName, registerField]);

    return (
        <Select
            defaultValue={defaultValue}
            ref={selectRef}
            classNamePrefix="react-select"
            {...rest}
        />
    );
}
