import React, { useRef, useEffect } from 'react';
import { Select } from 'unform-material-ui';
import { MenuItem, FormControl } from '@material-ui/core';
import { useField } from '@unform/core';

export default function SelectFilter({ name, label, options, ...rest }) {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <FormControl variant="outlined" size="small">
            <Select
                name={name}
                defaultValue={defaultValue}
                ref={selectRef}
                variant="outlined"
                margin="dense"
                color="secondary"
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                {...rest}
            >
                <MenuItem value="" disabled>
                    <em>{label}</em>
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
