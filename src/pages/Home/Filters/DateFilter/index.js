import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { StyledDatePicker } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, onTimestampChange, ...rest }) {
    const datepickerRef = useRef(null);
    const { fieldName, registerField, defaultValue } = useField(name);

    const [date, setDate] = useState(defaultValue || undefined);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: datepickerRef.current,
            path: 'props.selected',
        });
    }, [fieldName, registerField]);

    const handleTimestampChange = useCallback(
        (timestamp) => {
            setDate(timestamp);
            onTimestampChange(timestamp);
        },
        [onTimestampChange]
    );

    return (
        <StyledDatePicker
            dateFormat="dd/MM/yyyy"
            ref={datepickerRef}
            selected={date}
            onChange={handleTimestampChange}
            placeholderText="Data"
            {...rest}
        />
    );
}

DatePicker.propTypes = {
    name: PropTypes.string.isRequired,
    onTimestampChange: PropTypes.func.isRequired,
};
