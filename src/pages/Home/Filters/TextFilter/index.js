import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { TextField } from '@material-ui/core';

export default function TextFilter({ name, ...rest }) {
    const inputRef = useRef(null);
    const materialInputRef = useRef(null);

    const { fieldName, defaultValue, registerField, error } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            setValue(ref, value) {
                // eslint-disable-next-line no-param-reassign
                ref.value = value;

                materialInputRef.current
                    .querySelector('label')
                    .classList.add(
                        'MuiFormLabel-filled',
                        'MuiInputLabel-shrink'
                    );
            },
        });
    }, [fieldName, registerField]);

    return (
        <TextField
            error={!!error}
            ref={materialInputRef}
            inputRef={inputRef}
            defaultValue={defaultValue}
            helperText={error}
            name={name}
            variant="outlined"
            {...rest}
        />
    );
}
