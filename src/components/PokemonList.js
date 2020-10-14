import React, {useState, useEffect} from "react";
import PokemonCard from "./PokemonCard_EDIT";

function PokeList({ pokemon, setPokemonSelected, saleNumbers }) {
  return (
    <div className="wrapper">
      <div className="wrapperCards">
        {pokemon.map((pokemon, i) => {
          return (
            <div key={i} style={{position: 'relative'}}>
              <PokemonCard
                setPokemonSelected={setPokemonSelected}
                {...pokemon}
              />
              {saleNumbers ? (
                <div 
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    borderRadius: '50%',
                    backgroundColor: 'red',
                    width: '50px',
                    height: '50px',
                    color: 'white',
                    fontSize: '20px',
                    textAlign: 'center'
                  }}
                >
                  <p style={{marginTop: '12.5px'}}>-{ saleNumbers[i] }%</p>
                </div>
              ) : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokeList;
