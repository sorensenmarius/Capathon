import React, { useEffect, useState } from 'react';
import { ImageTextComp } from '../components/ImageTextComponent';
import pokeimg from '../resources/pokemon.png';
import flop from '../resources/meowmagi.png';
import '../styles/styles.css';
import PokeList from '../components/PokemonList';
import { getAllPokemon, loadPokemon } from '../service/GetPokemon';
import { CircularProgress } from '@material-ui/core';

function HomePage(props) {
  const initialURL = `https://pokeapi.co/api/v2/pokemon/`;

  const calculateTimeLeft = () => {
    const difference = saleExpiry - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [saleExpiry] = useState(new Date().setMinutes(new Date().getMinutes() + 10));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [salePokemon, setSalePokemon] = useState([])
  const [saleNumbers, setSaleNumbers] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    async function getRandom() {
      setLoading(true)
      setSalePokemon(await getRandomPokemon())
      setLoading(false)
    } 
    getRandom();
    getRandomNumbers();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });


  const timerComponents = [];

  async function getRandomPokemon() {
    let results = []
    for(let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * 151);
      const url = `${initialURL}${randomNumber}`;
      const response = await getAllPokemon(url);
      results.push(response)
    }

    return results
  }

  function getRandomNumbers() {
    let numbers = []
    for(let i = 0; i < 6; i++) {
      numbers.push(Math.floor(Math.random() * 50) + 25)
    }
    setSaleNumbers(numbers)
  }

  Object.keys(timeLeft).forEach((interval, i) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={i}>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });

  return (
    <div className="App">
      <div className="coming-soon">
        <h1>WELCOME TO Pokémon4Cash</h1>
        <hr />
        <div className="counter">
          {timerComponents.length ? (
            <>
              <p>Hurry! The sale ends in { timerComponents }</p>
            </>
          ) : ''}
        </div>
      </div>
      {loading ? (
        <CircularProgress />
      ) : ''}
      <PokeList 
        pokemon={salePokemon}
        setPokemonSelected={props.setPokemonSelected}
        saleNumbers={saleNumbers}
      />
    </div>
  );
}

export default HomePage;
