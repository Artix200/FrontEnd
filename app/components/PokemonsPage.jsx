'use client';

import { useState } from 'react';
import { pokemons } from '../data/pokemon';
import PokemonCard from './PokemonCard';
import types from '../data/types';

export default function PokemonSection() {
  const [searchPokemon, setSearchPokemon] = useState('');
  const [typesPokemons, setTypesPokemon] = useState([]);
  const [catchedPokemons, setCatchedPokemons] = useState([]);

  function handleInputChange(e) {
    setSearchPokemon(e.target.value);
  }

  function handleTypesChange(e) {
    const choosenType = e.target.value;
    if (typesPokemons.includes(choosenType)) {
      const ArrayWithoutType = typesPokemons.filter(
        (type) => type !== choosenType,
      );
      setTypesPokemon(ArrayWithoutType);
    } else {
      setTypesPokemon([...typesPokemons, choosenType]);
    }
  }

  function handleAdditionToCatched(catch_name) {
    if (catchedPokemons.includes(catch_name)) {
      const ArrayWithoutPokemonName = catchedPokemons.filter(
        (name) => name !== catch_name,
      );
      setCatchedPokemons(ArrayWithoutPokemonName);
    } else {
      setCatchedPokemons([...catchedPokemons, catch_name]);
    }
  }
  const filterList = pokemons
    .filter((pokemon) => pokemon.name.includes(searchPokemon))
    .filter((pokemon) => {
      const checkFilterTypes = typesPokemons.reduce((acc, cur) => {
        pokemon.types.includes(cur) ? acc.push(true) : acc.push(false);
        return acc;
      }, []);
      const validPokemon =
        checkFilterTypes.length === 0
          ? true
          : checkFilterTypes.includes(true)
            ? true
            : false;
      return validPokemon;
    });
  const isEmpty = filterList.length == 0;
  return (
    <>
      <div>
        <input value={searchPokemon} onChange={handleInputChange}></input>
      </div>
      <form>
        {types.map((type) => {
          return (
            <div key={type}>
              <label>{type}</label>
              <input
                type="checkbox"
                onChange={handleTypesChange}
                value={type}
              ></input>
            </div>
          );
        })}
      </form>
      <div className="pokemon_grid_container">
        {filterList.map(({ id, name, types, img }) => (
          <PokemonCard
            key={id}
            name={name}
            types={types}
            img={img}
            id={id}
            catched={catchedPokemons.includes(name)}
            handleAdditionToCatched={handleAdditionToCatched}
          />
        ))}
      </div>
      {isEmpty && <div>Nie ma żadnych pokemonów o takiej nazwie</div>}
    </>
  );
}
