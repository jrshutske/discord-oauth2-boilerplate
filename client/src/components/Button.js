import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useButtonStyles = makeStyles(theme => ({
  root: {
   height:"3.9em",
  },
}));

export default function ContainedButtons(props) {
  const { text, onClick, disabled, icon } = props;
  const classes = useButtonStyles();

  return (
      <Button 
        classes={classes} 
        variant="contained" 
        color="primary"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </Button>
  );
}
