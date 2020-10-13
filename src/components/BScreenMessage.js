import React from 'react';
import marker from '../resources/marker.PNG';

const BScreenMessage = (props) => (
  <div
    className="disable-5s"
    style={{
      height: '10vw',
      padding: '1vw',
      backgroundColor: '#ffeeff',
      display: 'flex',
      flexShrink: '0',
      fontSize: '2.2vw',
      lineHeight: '5vw',
      letterSpacing: '1vw',
      justifyContent: 'space-between',
      pointerEvents: 'none',
      textAlign: 'left',
    }}
    onClick={() => props.setPhase()}
  >
    <div style={{ width: '37vw' }}>
      <div className="typing-menu">{props.firstLine}</div>
      <div className="typing-menu-delay">{props.secondLine}</div>
    </div>
    <img
      className="blink"
      src={marker}
      alt="next"
      style={{ height: '2vw', marginTop: '8vw' }}
    ></img>
  </div>
);

export default BScreenMessage;
