import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MeowthModal from './MeowthModal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    outline: 'none',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: 'Ubuntu',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '20px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      {props.giveMoneyToMeowthInstead ? (
        <div>
          <h2 id="simple-modal-title" style={{ textAlign: 'center' }}>
            Congratulations! Here's your {props.pokemonSelected.name}
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {props.card}
          </div>
        </div>
      ) : (
        <MeowthModal pokemonSelected={props.pokemonSelected} />
      )}
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
