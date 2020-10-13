import React, { useState } from 'react';
import BModal from './BModal';
import Meowth from '../resources/meowthbuy.jpg';

const MeowthModal = (props) => {
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(0);
  return (
    <div style={{ height: '200px' }}>
      You gave your money to Meowth instead :(
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <div id="simple-modal-description">
          WOW!{' '}
          <h2>
            <b>{props.pokemonSelected.base_experience} $</b>
          </h2>
        </div>
        <div style={{ position: 'relative', width: '100px' }}>
          <img
            src={Meowth}
            alt="meowth"
            style={{
              height: '120px',
              position: 'absolute',
              zIndex: '1',
              transform: `translateX(-${nudge}px)`,
            }}
            onClick={() => setNudge(nudge + 1)}
          />
          <span
            style={{
              height: '50px',
              color: 'red',
              cursor: 'pointer',
              textAlign: 'center',
              fontSize: '33px',
              margin: '0px 30px',
            }}
            onClick={() => setOpen(!open)}
          >
            ?
          </span>
        </div>
        Thank you!
      </div>
      <BModal
        open={open}
        handleClose={() => setOpen(false)}
        pokemonSelected={props.pokemonSelected}
      />
    </div>
  );
};
export default MeowthModal;
