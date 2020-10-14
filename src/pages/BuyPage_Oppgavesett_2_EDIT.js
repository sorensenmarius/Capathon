import React, { useState, useEffect } from 'react';
import { getPokemonAbilities } from '../service/GetPokemon';
import PokemonCard from '../components/PokemonCard_EDIT';
import PokeInfoGrid from '../components/PokeInfoGrid';

import PokeList from '../components/PokemonList';
import Button from '../components/Button';
import { fetchSuggested } from '../service/GetPokemon.js';
import Modal from '../components/BuyModal';
import '../styles/styles.css';
import { CircularProgress, makeStyles } from '@material-ui/core';
import SelectInput from '@material-ui/core/Select/SelectInput';

/* 
Hei! Velkommen til oppgavesett 2, her er det flere oppgaver som skal
løses. Du finner funksjonene:

  'pokemonStats' (oppgave 1), 
  'suggestedPokemons' (oppgave 2),
  'shinyPokemons' (oppgave 3),

Etter dette kan dere style siden slik dere ønsker (oppgave 4) for å bli med i kåring
av 'Best Design' da kan det bli nødvendig å søke igjennom filer/komponenter
for å redigere stylingen eller bare redigere denne filen med inline styles, 
style={{}}. Se React hjemmesiden for mer info om dette.*/

const BuyPage = (props) => {
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [open, setOpen] = useState(false);
  const [pokemonArray, setPokemonArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const centerStyle = {
    margin: 'auto',
    display: 'block'
  }

  // OPPGAVE 1
  const pokemonStats = () => {
    
    // Vi har fått beskjed fra brukere at stats bare viser ? i GUI.
    // Kan dere fikse at riktig stat blir vist? 

    // ** BONUS ** 
    // gjerne bruk litt styling her for å gjøre stats mer interessant

    const statColour = {
      hp: '#53cd5b',
      attack: '#f6de52',
      defense: '#ed7f0f',
      'special-attack': '#56b0f1',
      'special-defense': '#ad62f6',
      speed: '#f06ace',
    };

    return (
      <span style={statColour}>
        {props.pokemonSelected.stats.map((e, i) => JSON.stringify(e))}
      </span>
    );
  };

  // OPPGAVE 2
  const buyPokemon = () => {
    /* Vi får rapporter fra brukere at de gir penger til Meowth 
    istede for å kjøpe pokemons når de trykker 'BUY POKEMON', 
    dette MÅ vi fikse */
    return true;
  };

  // OPPGAVE 3
  const suggestedPokemons = () => {
    /* De foreslåtte pokemonene er alltid 'normal' type,
    vi vil at de foreslåtte pokemonene skal være relatert
    til pokemonen valgt. Bruk informasjonen tilgjengelig om den
    valgte pokemonen for å lage bedre forslag for brukeren.
    foreksempel gress til gress pokemon osv. */
    fetchSuggested(setPokemonArray, props.pokemonSelected.types[0].type.name)
  };

  /* BONUS OPPGAVE */
  // Legg til en Loading spinner som dere kan lage eller laste inn
  // selv og legg til der data bruker tid før det vises. Foreksempel
  // suggestedPokemons feltet eller ability feltet
  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    getPokemonAbilities(
      props.pokemonSelected.abilities[0].ability.url,
      setPokemonAbilities,
    );
    suggestedPokemons();
    setLoading(false)
  }, [props.pokemonSelected.abilities, props.pokemonSelected.types]);

  const stats = props.pokemonSelected.stats.map((e, i) => (
      <div style={{padding: '5px'}} key={i}>
        {e.stat.name}: {e.base_stat}
      </div>
    ))

  return (
    <div>
      <Button onClick={() => props.setPokemonSelected({})}>{'< BACK'}</Button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
        }}
      >
        <div className="pokemon-effect-info">
      <div style={{position:"absolute", right:"40px"}}>
        <h2>Price:</h2>
        <h1>{props.pokemonSelected.base_experience}$</h1>
      </div>
          <div style={{maxWidth: '30%', display: 'inline-block', float: 'left'}}>
            <PokemonCard
              setPokemonSelected={props.setPokemonSelected}
              {...props.pokemonSelected}
            />
          </div>
          <div
            style={{
              width: '70%',
              display: 'inline-block'
            }}
          >
            <div>
              <b>Abilities</b>
              <p style={{textTransform: 'capitalize'}}>{props.pokemonSelected.abilities.slice(0, 3).map((ab, i, arr) => `${ab.ability.name}${i !== arr.length - 1 ? ', ' : ''}`)}</p>
            </div>
            <div>
              <b>Ability {props.pokemonSelected.abilities[0].ability.name}:</b>
              <br />
              {pokemonAbilities.effect_entries &&
                pokemonAbilities.effect_entries.filter(
                  (e) => e.language.name === 'en',
                )[0].effect}
            </div>
            <div>
              <br />
              <b>Stats</b>
              {stats}
            </div>
          </div>
          <div
            style={{
              bottom: '10px',
              right: '10px',
              position: 'absolute',
            }}
          >
            <Button onClick={() => setOpen(true)}>Buy Pokemon</Button>
          </div>
        </div>
      </div>
      {/* <PokeInfoGrid 
        pokemonSelected={props.pokemonSelected}
        >
        {pokemonStats()}
      </PokeInfoGrid> */}
      <div style={{ width: '86vw', margin: '0 auto' }}>
        <h2 style={{ margin: '25px' }}>
          Suggested other pokemon you might be intrested in:
          {loading ? (
            <CircularProgress color="#2B0A3D" style={centerStyle}/>
          ) : ''}
        </h2>
        <PokeList
          pokemon={pokemonArray}
          setPokemonSelected={props.setPokemonSelected}
        />
      </div>
      <Modal
        open={open}
        giveMoneyToMeowthInstead={buyPokemon()}
        handleClose={() => setOpen(false)}
        card={
          <PokemonCard
            setPokemonSelected={props.setPokemonSelected}
            {...props.pokemonSelected}
          />
        }
        pokemonSelected={{ ...props.pokemonSelected }}
      />
    </div>
  );
};

export default BuyPage;
