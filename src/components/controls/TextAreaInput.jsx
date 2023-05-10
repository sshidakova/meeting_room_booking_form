import React from 'react';
// import TextField from '@mui/joy/TextField';
import Box from '@mui/joy/Box';
import {
  TextField,
} from '@material-ui/core';

export default function TextAreaInput(props) {
  const {
    name, value, onChange, label,
  } = props;
  return (

    <TextField
      minRows={4}
      name={name}
      value={value}
      onChange={onChange}
      placeholder="Комментарий"
      variant="outlined"
      fullWidth
      multiline
    />

  );
}
