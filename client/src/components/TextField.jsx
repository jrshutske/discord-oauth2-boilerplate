import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useTextFieldStyles = makeStyles(() => ({
  root: {
    height: '3em',
  },
}));

export default function BasicTextFields(props) {
  const {
    label, disabled, onChange, id,
  } = props;
  const classes = useTextFieldStyles();

  return (
    <TextField
      inputProps={{ classes }}
      onChange={onChange}
      classes={classes}
      id={id}
      label={label}
      variant="outlined"
    />
  );
}
