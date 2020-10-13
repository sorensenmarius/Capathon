import React, { useState } from 'react';
import marker from '../resources/marker.PNG';

const BScreenMenuList = (props) => {
  return (
    <React.Fragment>
      <div
        className="poke-borders"
        style={{
          borderImageSource: 'url("/pokeborder.png")',
          borderImageSlice: '55',
          margin: '-1.5vw -1.5vw 0px 0px',
          height: '10vw',
          width: '22vw',
          padding: '1vw',
          display: props.phase == 3 ? 'flex' : 'grid',
          flexDirection: 'column',
          gridTemplateColumns: '11vw 11vw',
          gridTemplateRows: '5vw 5vw',
          backgroundColor: '#ffeeff',
          letterSpacing: '0vw',
          paddingLeft: '2vw',
          columnGap: '2vw',
          position: 'relative',
        }}
        onMouseLeave={() => props.phase == 3 && props.setPhase(2)}
      >
        {props.phase == 3 && (
          <div
            className="poke-borders"
            style={{
              position: 'absolute',
              borderImageSource: 'url("/pokeborder.png")',
              borderImageSlice: '55',
              height: '5vw',
              width: '21vw',
              padding: '1vw',
              left: '-18vw',
              top: '-10vw',
              backgroundColor: '#ffeeff',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                marginTop: '-2vw',
                height: '2vw',
              }}
            >
              TYPE/
            </div>
            <div
              style={{
                height: '2vw',
                textAlign: 'center',
              }}
            >
              {(props.pokemonMoves[props.moveInfo] &&
                props.pokemonMoves[props.moveInfo].type.name) ||
                '-'}
            </div>
            <div
              style={{
                height: '2vw',
                textAlign: 'right',
              }}
            >
              {props.pokemonMoves[props.moveInfo] &&
                `${props.pokemonMoves[props.moveInfo].pp}/${
                  props.pokemonMoves[props.moveInfo].pp
                }`}
            </div>
          </div>
        )}
        {props.phase == 3 ? (
          <React.Fragment>
            <div
              className="menu-item-battle"
              onMouseEnter={() => props.setMoveInfo(0)}
              onClick={() => props.pokemonMoves[0] && props.attackAniStart('l')}
            >
              <img className="menu-select" src={marker} alt={'select'}></img>
              <p style={{ pointerEvents: 'none' }}>
                {(props.pokemonMoves[0] && props.pokemonMoves[0].name) || '-'}
              </p>
            </div>{' '}
            <div
              className="menu-item-battle"
              onMouseEnter={() => props.setMoveInfo(1)}
              onClick={() => props.pokemonMoves[1] && props.attackAniStart('l')}
            >
              <img className="menu-select" src={marker} alt={'select'}></img>{' '}
              <p style={{ pointerEvents: 'none' }}>
                {(props.pokemonMoves[1] && props.pokemonMoves[1].name) || '-'}
              </p>
            </div>{' '}
            <div
              className="menu-item-battle"
              onMouseEnter={() => props.setMoveInfo(2)}
              onClick={() => props.pokemonMoves[2] && props.attackAniStart('l')}
            >
              <img className="menu-select" src={marker} alt={'select'}></img>{' '}
              <p style={{ pointerEvents: 'none' }}>
                {(props.pokemonMoves[2] && props.pokemonMoves[2].name) || '-'}
              </p>
            </div>{' '}
            <div
              className="menu-item-battle"
              onMouseEnter={() => props.setMoveInfo(3)}
              onClick={() => props.pokemonMoves[3] && props.attackAniStart('l')}
            >
              <img className="menu-select" src={marker} alt={'select'}></img>{' '}
              <p style={{ pointerEvents: 'none' }}>
                {(props.pokemonMoves[3] && props.pokemonMoves[3].name) || '-'}
              </p>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="menu-item" onClick={() => props.setPhase(3)}>
              <img className="menu-select" src={marker} alt={'select'}></img>{' '}
              FIGHT
            </div>
            <div className="menu-item">
              <img className="menu-select" src={marker} alt={'select'}></img>{' '}
              PKMN
            </div>
            <div className="menu-item">
              <img className="menu-select" src={marker} alt={'select'}></img>{' '}
              ITEM
            </div>
            <div
              className="menu-item"
              onClick={() => {
                props.pBattle.pause();
                props.pRunaway.play();
                props.handleClose();
              }}
            >
              <img className="menu-select" src={marker} alt={'select'}></img>{' '}
              RUN
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};
export default BScreenMenuList;
