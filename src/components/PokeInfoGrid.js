import React from "react";
import typeColor from "../resources/TypeColor";

// const statColour = {
//   hp: '#53cd5b',
//   attack: '#f6de52',
//   defense: '#ed7f0f',
//   'special-attack': '#56b0f1',
//   'special-defense': '#ad62f6',
//   speed: '#f06ace',
// };

const PokeInfoGrid = (props) => (
  <div className="pokemon-buy-info">
    <span>
      <strong>Name: </strong>
    </span>
    <span>{props.pokemonSelected.name}</span>
    <span>
      <strong>Type: </strong>
    </span>
    <span>
      {props.pokemonSelected.types.map((e, i) => (
        <div
          className="pokemonType"
          key={i}
          style={{ backgroundColor: typeColor[e.type.name] }}
        >
          {e.type.name}
        </div>
      ))}
    </span>
    <span>
      <strong>Abilities: </strong>
    </span>
    <span>
      {props.pokemonSelected.abilities.map((e, i) => (
        <p key={i}>{e.ability.name}</p>
      ))}
    </span>
    <span>
      <strong>Stats: </strong>
    </span>
    <br />
    {stats(props)}
    <br />
    <span>
      <strong>Price: </strong>
    </span>{" "}
    <span>
      <h2>
        <b>{props.pokemonSelected.base_experience} $</b>
      </h2>
      {/*
      {props.pokemonSelected.name}
      {props.pokemonSelected.name}
      */}
    </span>
  </div>
);

const stats = (props) => {
  return props.pokemonSelected.stats.map((e, i) => (
    <>
      <p key={i}>
        {e.stat.name}:
      </p>
      <p>
        {e.base_stat}
      </p>
    </>
  ));
};

export default PokeInfoGrid;
