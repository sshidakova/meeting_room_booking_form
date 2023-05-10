import React from 'react';
import {
  FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText,
} from '@material-ui/core';

export default function Select(props) {
  const {
    name, label, value, onChange, options,
  } = props;

  return (
    <FormControl
      variant="outlined"

    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        <MenuItem value="">Не выбрано</MenuItem>
        {
                    options.map(
                      (item, index) => (<MenuItem key={index} value={item}>{item}</MenuItem>),
                    )
                }
      </MuiSelect>
    </FormControl>
  );
}
