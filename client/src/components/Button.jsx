import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useButtonStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ContainedButton(props) {
  const {
    children, onClick, disabled, fullWidth, variant, icon,
  } = props;
  const classes = useButtonStyles();

  return (
    <Button
      color="primary"
      disabled={disabled}
      fullWidth={fullWidth}
      classes={classes}
      variant={variant || 'contained'}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
