import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  list: {
    maxHeight: "20em",
    overflow: "scroll"
  },
  listItem: {
    background: "lightgrey"
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function InteractiveList(props) {
  const { rooms, selected, onClick } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.list}>
        <List>
          <Typography variant="h6" className={classes.title}>
            {"Rooms"}
          </Typography>
          {rooms.map((room,i)=>(
            <ListItem 
            button
            selected={selected && room.name === selected.name}
            className={classes.listItem}
              divider 
              onClick={()=>onClick(room)}
            >
              <ListItemText
                primary={room.name}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Fragment>
  );
}