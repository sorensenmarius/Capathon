import React from 'react';

const hpToWidth = (maxHp, hp) => 13;
// cant be bothered to acutally calculate this, one attack, full dmg
// maxHp === hp ? 13 : Math.floor(maxHp + (hp - maxHp) / maxHp) * 13;

const BScreenStats = (props) => (
  <div
    style={{
      width: '60%',
      display: 'flex',
      flexFlow: 'column',
      margin: props.enemy ? '0vw 3vw' : '1vw 2vw',
      justifyContent: props.enemy ? 'flex-start' : 'flex-end',
    }}
  >
    <div style={{ marginLeft: props.enemy ? '-1vw' : '7vw' }}>
      {props.pokemonSelected.name.toUpperCase()}
    </div>
    <div
      style={{
        fontSize: '1.7vw',
        textAlign: 'center',
        padding: props.enemy ? '0vw 10vw 0vw 0vw' : '0vw 0vw 0vw 10vw',
      }}
    >
      <b
        style={{
          fontSize: '1vw',
          fontWeight: '900',
          textShadow: '1px 0px 0px black, 0px 1px 0px black, 1px 1px 0px black',
        }}
      >
        :L
      </b>
      1
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: props.enemy ? 'row' : 'row-reverse',
      }}
    >
      <div
        style={{
          borderLeft: props.enemy ? '0.4vw solid black' : '0vw',
          borderRight: props.enemy ? '0vw' : '0.4vw solid black',
          borderBottom: '0.4vw solid black',
          borderRadius: props.enemy ? '0vw 1vw' : '1vw 0vw',
          padding: '1vw',
          display: 'flex',
          alignItems: 'center',
          flexFlow: 'column',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <b
            style={{
              fontSize: '1vw',
              marginRight: '1vw',
              textShadow:
                '1px 0px 0px black, 0px 1px 0px black, 1px 1px 0px black',
            }}
          >
            HP:
          </b>
          <div
            style={{
              border: '0.2vw solid black',
              height: '0.5vw',
              width: '13vw',
              borderRadius: '0.5vw',
            }}
          >
            <div
              className={props.currentHP == 10 ? 'hp-normal-attack-ani-l' : ''}
              style={{
                backgroundColor: '#53cd5b',
                height: '0.5vw',
                borderRadius: '0.5vw',
                width: `${hpToWidth(
                  props.pokemonSelected.stats[0].base_stat,
                  props.currentHP,
                )}vw`,
              }}
            ></div>
          </div>
        </div>
        {props.enemy
          ? ''
          : props.pokemonSelected.stats[0].base_stat +
            '/ ' +
            props.pokemonSelected.stats[0].base_stat}
      </div>
      <div
        style={{
          borderBottom: '1vw solid black',
          borderRight: props.enemy ? '3vw solid transparent' : '0vw',
          borderLeft: props.enemy ? '0vw' : '3vw solid transparent',
        }}
      ></div>
    </div>
  </div>
);
export default BScreenStats;
