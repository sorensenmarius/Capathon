import React, { useState, useEffect } from 'react';
import BScreenStats from './BScreenStats';
import BScreenMenu from './BScreenMenu';
import NormalAttack from './BNormalAttack';
import { MeowthJSON } from '../resources/Meowth';
import index from '../resources/index.jpg';

const BScreen = (props) => {
  const [currentHP, setCurrentHP] = useState(
    props.pokemonSelected.stats[0].base_stat,
  );
  const [moves, setMoves] = useState([]);
  const [currentEnemyHP, setCurrentEnemyHP] = useState(
    MeowthJSON.stats[0].base_stat,
  );
  const [phase, setPhase] = useState(0);

  const [moveInfo, setMoveInfo] = useState(0);
  const [startAttackAni, setAttackAni] = useState('');
  const [missing, setMissing] = useState(false);
  const attackAniStart = (move) => {
    // logic
    // setAttackAni(`${move}-attack-ani`);

    setAttackAni(`normal-attack-ani-l`);
    setPhase(2);
    setCurrentEnemyHP(10);
    setTimeout(() => {
      setMissing(true);
      props.pBattle.pause();
      props.pVictory.play();
    }, 5000);
  };
  const attackAniEnd = (move) => {
    // this is to potentially have multiple attacks, rounds
    // setAttackAni('');
  };

  useEffect(() => {
    const fetchMoves = async () => {
      const fetchedMoves = await Promise.all(
        props.pokemonSelected.moves
          .filter((e) => e.version_group_details[0].level_learned_at == 1)
          .map((e) =>
            fetch('https://pokeapi.co/api/v2/move/' + e.move.name).then((res) =>
              res.json(),
            ),
          ),
      );
      setMoves(fetchedMoves);
    };
    fetchMoves();
  }, []);
  return (
    <div
      style={{
        width: '47vw',
        height: '46.5vw',
        overflow: 'hidden',
        backgroundColor: '#ffeeff',
        maxHeight: '46.5vw',
        display: 'flex',
        flexFlow: 'column',
        fontFamily: 'PKMN',
        fontSize: '2vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexShrink: '0',
          height: '15vw',
          overflow: 'hidden',
        }}
      >
        <BScreenStats
          pokemonSelected={MeowthJSON}
          currentHP={currentEnemyHP}
          enemy={true}
        />
        <div
          className={missing && 'missing-enter'}
          style={{
            display: missing ? 'flex' : 'none',
            width: '23vw',
            position: 'absolute',
            backgroundColor: '#ffeeff',
          }}
        >
          <img src={index} style={{ height: '14vw' }} alt="msiing"></img>
          <div style={{ lineBreak: 'anywhere' }}>
            The secret word is:{'   '} RHIuIFl1a2luYXJpIE9oa2lkbw==
          </div>
        </div>
        <div
          className={`enemy-${startAttackAni} faint-${startAttackAni}`}
          onAnimationEnd={attackAniEnd}
          style={{ width: '40%', position: 'relative' }}
        >
          <NormalAttack
            startAttackAni={startAttackAni}
            attackAniEnd={attackAniEnd}
          ></NormalAttack>
          <img
            className={`enemy-slide `}
            style={{ width: '100%', marginTop: '10%' }}
            alt="b"
            src={MeowthJSON.sprites.front_default}
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexShrink: '0',
          height: '16vw',
          overflow: 'hidden',
        }}
      >
        <div style={{ width: '40%' }}>
          <img
            className="player-slide"
            style={{ width: '150%', marginLeft: '-25%' }}
            alt="b"
            src={props.pokemonSelected.sprites.back_default}
          />
        </div>

        <BScreenStats
          pokemonSelected={props.pokemonSelected}
          currentHP={currentHP}
          enemy={false}
        />
      </div>
      <BScreenMenu
        phase={phase}
        setPhase={setPhase}
        pBattle={props.pBattle}
        pRunaway={props.pRunaway}
        pVictory={props.pVictory}
        pokemonSelected={props.pokemonSelected}
        moves={moves}
        moveInfo={moveInfo}
        setMoveInfo={setMoveInfo}
        handleClose={props.handleClose}
        attackAniStart={attackAniStart}
      />
    </div>
  );
};

export default BScreen;
