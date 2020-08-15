import React, { useRef, useState, useEffect, useCallback } from 'react';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@unform/core';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, getParentForm, ...rest }) {
    const datepickerRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    const [date, setDate] = useState(defaultValue || null);

    const handleChange = useCallback(() => {
        setDate();
        const formRef = getParentForm();
        formRef.current.submitForm();
    }, [getParentForm, setDate]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: datepickerRef.current,
            path: 'props.selected',
            clearValue: (ref) => {
                ref.clear();
            },
        });
    }, [fieldName, registerField]);

    return (
        <ReactDatePicker
            //  yyyy-MM-ddTHH:mm:ss
            dateFormat="dd/MM/yyyy HH:mm:ss"
            ref={datepickerRef}
            selected={date}
            onChange={handleChange}
            {...rest}
        />
    );
}
