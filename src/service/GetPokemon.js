export const loadPokemon = async (data, searchTerm, pokeInfo) => {
  let _pokemonData = await Promise.all(
    data.map(async (pokemon) => {
      let pokemonRecord = await getPokemon(pokemon);
      return pokemonRecord;
    }),
  );

  if (searchTerm.length) {
    const results = pokeInfo.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm),
    );
    return results;
  } else {
    return _pokemonData;
  }
};
function getPokemon({ url }) {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export const getAllPokemon = async (url) => {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
};

export const getPokemonAbilities = (url, setPokemonAbilities) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setPokemonAbilities(json);
    });

export const fetchSuggested = (setPokemonArray, type) => {
  fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then((res) => res.json())
    .then((json) =>
      loadPokemon(json.pokemon.map((e) => e.pokemon).slice(0, 7), '', []),
    )
    .then((data) => setPokemonArray(data));
};
