import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import PaletteIcon from '@material-ui/icons/Palette';
import BrushIcon from '@material-ui/icons/Brush';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { AppContext } from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    zIndex: 999,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <Brightness7Icon />, name: 'light' },
  { icon: <Brightness3Icon />, name: 'dark' },
];

export default function ThemePicker() {
  const classes = useStyles('green');
  const [open, setOpen] = React.useState(false);
  const { themeSelector, setThemeSelector } = useContext(AppContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const chooseTheme = (theme) => {
    setOpen(false);
    setThemeSelector(theme);
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      className={classes.speedDial}
      icon={<SpeedDialIcon icon={<PaletteIcon />} openIcon={<BrushIcon />} />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          disabled={themeSelector === action.name}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => chooseTheme(action.name)}
        />
      ))}
    </SpeedDial>
  );
}
