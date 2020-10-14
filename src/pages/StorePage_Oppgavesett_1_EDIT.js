import React, { useState, useEffect } from 'react';
import { getAllPokemon, loadPokemon } from '../service/GetPokemon';
import PokeList from '../components/PokemonList';
import Search from '../components/SearchHeader';
import BuyPage from './BuyPage_Oppgavesett_2_EDIT';
import '../styles/searchstore.css';
import { CircularProgress } from '@material-ui/core';

//Oppgave 1:
//På search siden så ser vi kun en magikarp, kan dere liste ut alle 150 pokemons fra first generation?
//Hint: https://pokeapi.co/docs/v2#resource-listspagination-section
const StorePage = (props) => {
  //State
  const [searchTerm, setSearchTerm] = useState('');
  const [pokeInfo, setPokeInfo] = useState([]);
  const [allPokeInfo, setAllPokeInfo] = useState([]); // Keep all data seperatly for faster loading time and faster search
  const [loading, setLoading] = useState(false);

  //variable for URL
  const initialURL = `https://pokeapi.co/api/v2/pokemon/`;

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const url = `${initialURL}?limit=25`;
      const response = await getAllPokemon(url);
  
      let thePokeInfo = await loadPokemon(
        response.results,
        searchTerm,
        pokeInfo,
      );
      setAllPokeInfo(thePokeInfo)
      setLoading(false)
      backgroundLoad(thePokeInfo)
    }
    fetchData()
  }, [])

  // Load most of the data in the background to get faster loading of first view
  async function backgroundLoad(first25) {
    const url = initialURL + '?limit=125&offset=25'
    const response = await getAllPokemon(url);

    const thePokeInfo = await loadPokemon(
      response.results,
      searchTerm,
      pokeInfo,
    );

    setAllPokeInfo(first25.concat(thePokeInfo));
  }

  //mount
  useEffect(() => {
    if(!searchTerm) {
      setPokeInfo(allPokeInfo)
      return
    }

    const filteredPokeInfo = allPokeInfo.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setPokeInfo(filteredPokeInfo)
  }, [searchTerm, allPokeInfo]);


  //Oppgave 2:
  //Her er en påbegynt søkefunksjon, kan dere fullføre denne?
  //Hint: Komponenten Search har en prop som heter handleChange
  function handleChange(e) {
    const input = e.target.value
    setSearchTerm(input)
  }

  //Oppgave 3:
  //NBNB! SE POKEMONCARD KOMPONENT FOR OPPGAVE 3

  const centerStyle = {
    margin: 'auto',
    display: 'block'
  }
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
          <Search 
            handleChange={handleChange}
          />
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
          {loading ? (
            <CircularProgress color="#2B0A3D" style={centerStyle}/>
          ) : ''}
        </div>
      )}
    </div>
  );
};

export default StorePage;
