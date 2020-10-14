import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#2B0A3D',
    padding: '10px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedButtons(props) {
  const classes = useStyles();

  return (
    <div onClick={props.onClick}>
      <ColorButton
        style={props.style}
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        {props.children}
      </ColorButton>
    </div>
  );
}
