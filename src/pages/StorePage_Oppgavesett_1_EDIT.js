import React, { useState, useEffect } from 'react';
import { getAllPokemon, loadPokemon } from '../service/GetPokemon';
import PokeList from '../components/PokemonList';
import Search from '../components/SearchHeader';
import BuyPage from './BuyPage_Oppgavesett_2_EDIT';
import '../styles/searchstore.css';

//Oppgave 1:
//På search siden så ser vi kun en magikarp, kan dere liste ut alle 150 pokemons fra first generation?
//Hint: https://pokeapi.co/docs/v2#resource-listspagination-section
const StorePage = (props) => {
  //State
  const [searchTerm, setSearchTerm] = useState('');
  const [pokeInfo, setPokeInfo] = useState([]);

  //variable for URL

  const initialURL = `https://pokeapi.co/api/v2/pokemon/?limit=1&offset=128`;

  //mount
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);

      let thePokeInfo = await loadPokemon(
        response.results,
        searchTerm,
        pokeInfo,
      );
      setPokeInfo(thePokeInfo);
    }
    fetchData();
  }, [searchTerm]);

  //Oppgave 2:
  //Her er en påbegynt søkefunksjon, kan dere fullføre denne?
  //Hint: Komponenten Search har en prop som heter handleChange
  function handleChange(e) {}

  //Oppgave 3:
  //NBNB! SE POKEMONCARD KOMPONENT FOR OPPGAVE 3

  return (
    <div>
      {props.pokemonSelected.name ? (
        <BuyPage
          Label={'Store'}
          setPokemonSelected={props.setPokemonSelected}
          pokemonSelected={props.pokemonSelected}
        />
      ) : (
        <div>
          <Search />
          <div className="spacing">
            <h1 className="heading">Pokemon Store</h1>
            <p>
              Buy Pokemons you want! They are cute and fit for fight! Help
              pokemon4cash ready up the store
            </p>
          </div>
          <PokeList
            pokemon={pokeInfo}
            setPokemonSelected={props.setPokemonSelected}
            search={pokeInfo}
          />
        </div>
      )}
    </div>
  );
};

export default StorePage;
