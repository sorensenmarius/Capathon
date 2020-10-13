import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import BScreen from './BScreen';
import '../resources/animations.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    position: 'absolute',
    backgroundColor: '#FFF',
    border: '2px solid #000',
    outline: 'none',
  };
}

const BModal = (props) => {
  const [modalStyle] = useState(getModalStyle);
  const pBattle = document.getElementById('pokemonbattle');
  const pRunaway = document.getElementById('runaway');
  const pVictory = document.getElementById('victory');
  pBattle.currentTime = 1;
  pRunaway.currentTime = 0.5;
  pVictory.currentTime = 0.5;
  pVictory.pause();
  props.open ? pBattle.play() : pBattle.pause();

  return (
    <Modal
      open={props.open}
      onClose={() => {
        pBattle.pause();
        pRunaway.play();
        props.handleClose();
      }}
    >
      <div
        style={{
          width: '80vw',
          height: '100vh',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#000',
          outline: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BScreen
          pBattle={pBattle}
          pVictory={pVictory}
          pRunaway={pRunaway}
          pokemonSelected={props.pokemonSelected}
          handleClose={props.handleClose}
        />
        <div id="imADiv" style={modalStyle} className="active"></div>
      </div>
    </Modal>
  );
};
export default BModal;
