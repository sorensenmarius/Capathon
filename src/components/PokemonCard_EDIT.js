import React from "react";
import typeColor from "../resources/TypeColor";

//Oppgave 3:
// I resources så er det en fil som heter TypeColor, bruk denne for og sette farger på hver type i pokemonCard
//Hint: Importer typecolor og bruk inline style

const PokemonCard = (props) => {
  const pokemonInfo = props;
  console.log(typeColor)
  return (
    <div
      className="pokeWrapper"
      onClick={() => {
        props.setPokemonSelected({ ...props });
      }}
    >
      <img
        className="pokeImg"
        alt="pokemon_sprite"
        src={pokemonInfo.sprites.front_default}
      />
      <h2 className="pokemonName">{pokemonInfo.name}</h2>
      <div className="infoContainer">
        {pokemonInfo.types.map((type, i) => (
          <div 
            className="pokemonType" 
            key={i} 
            style={{ backgroundColor: typeColor[type.type.name] }}
          >
            {type.type.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
