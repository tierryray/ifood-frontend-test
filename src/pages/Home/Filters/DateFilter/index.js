import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useField } from '@unform/core';

import { StyledDatePicker } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, onTimestampChange, ...rest }) {
    const datepickerRef = useRef(null);
    const { fieldName, registerField, defaultValue } = useField(name);

    const [date, setDate] = useState(defaultValue || new Date());

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: datepickerRef.current,
            path: 'props.selected',
        });
    }, [fieldName, registerField]);

    const handleTimestampChange = useCallback((date) => {
        setDate(date);
        onTimestampChange(date);
    }, []);

    return (
        <StyledDatePicker
            //  yyyy-MM-ddTHH:mm:ss
            dateFormat="dd/MM/yyyy"
            ref={datepickerRef}
            selected={date}
            onChange={handleTimestampChange}
            {...rest}
        />
    );
}
