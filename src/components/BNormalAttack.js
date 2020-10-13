import React from 'react';
import phys from '../resources/big_physical.png';
const NormalAttack = (props) => (
  <React.Fragment>
    <img
      src={phys}
      alt="phys"
      className={props.startAttackAni}
      // onAnimationEnd={() => props.attackAniEnd()}
      style={{
        width: '9vw',
        position: 'absolute',
        top: '4vw',
        left: '1vw',
        visibility: 'hidden',
      }}
    ></img>
    <img
      src={phys}
      alt="phys"
      style={{
        width: '7vw',
        position: 'absolute',
        top: '9vw',
        left: '5vw',
        visibility: 'hidden',
      }}
    ></img>{' '}
    <img
      src={phys}
      alt="phys"
      style={{
        width: '5vw',
        position: 'absolute',
        top: '6vw',
        left: '8vw',
        visibility: 'hidden',
      }}
    ></img>
  </React.Fragment>
);
export default NormalAttack;
