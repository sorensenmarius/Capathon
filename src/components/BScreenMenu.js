import React from 'react';
import BScreenMessage from './BScreenMessage';
import BScreenMenuList from './BScreenMenuList';
import marker from '../resources/marker.PNG';
import '../resources/battle.css';

const phases = (props) => {
  console.log(props);
  switch (props.phase) {
    case 0:
      return (
        <BScreenMessage
          firstLine={'Wild MEOWTH'}
          secondLine={'appeared!'}
          setPhase={() => props.setPhase(1)}
        />
      );
    case 1:
      const lines =
        props.pokemonSelected.name.length < 9
          ? [`Go! ${props.pokemonSelected.name.toUpperCase()}!`, '']
          : [`Go!`, `${props.pokemonSelected.name.toUpperCase()}!`];
      return (
        <BScreenMessage
          firstLine={lines[0]}
          secondLine={lines[1]}
          setPhase={() => props.setPhase(2)}
        />
      );
    case 2:
      return (
        <BScreenMenuList
          setPhase={props.setPhase}
          phase={props.phase}
          pBattle={props.pBattle}
          pRunaway={props.pRunaway}
          pVictory={props.pVictory}
          handleClose={props.handleClose}
        />
      );
    case 3:
      return (
        <BScreenMenuList
          setPhase={props.setPhase}
          phase={props.phase}
          pBattle={props.pBattle}
          pRunaway={props.pRunaway}
          pVictory={props.pVictory}
          handleClose={props.handleClose}
          pokemonMoves={props.moves}
          moveInfo={props.moveInfo}
          setMoveInfo={props.setMoveInfo}
          attackAniStart={props.attackAniStart}
        ></BScreenMenuList>
      );
    default:
      break;
  }
};

const BScreenMenu = (props) => (
  <div
    className="poke-borders disable-5s"
    style={{
      display: 'flex',
      borderImageSource: 'url("/pokeborder.png")',
      borderImageSlice: '55',
      flexShrink: '0',
      height: '12vw',
      fontSize: '2.2vw',
      lineHeight: '5vw',
      backgroundColor: '#ffeeff',
      margin: '0px 10px',
      letterSpacing: '1vw',
      justifyContent: 'flex-end',
    }}
  >
    {phases(props)}
  </div>
);
export default BScreenMenu;
