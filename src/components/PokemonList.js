import React from "react";
import PokemonCard from "./PokemonCard_EDIT";

function PokeList({ pokemon, setPokemonSelected }) {
  return (
    <div className="wrapper">
      <div className="wrapperCards">
        {pokemon.map((pokemon, i) => {
          return (
            <PokemonCard
              key={i}
              setPokemonSelected={setPokemonSelected}
              {...pokemon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PokeList;
