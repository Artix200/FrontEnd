'use client';

import { useState } from 'react';
import { pokemons } from '../data/pokemon';
import PokemonCard from './PokemonCard';
import types from '../data/types';

export default function PokemonSection() {
  const [searchPokemon, setSearchPokemon] = useState('');
  const [typesPokemon, setTypesPokemon] = useState([]);

  function handleInputChange(e) {
    setSearchPokemon(e.target.value);
  }

  function handleTypesChange(e) {
    const choosenType = e.target.value;
    if (typesPokemon.includes(choosenType)) {
      const ArrayWithoutType = typesPokemon.filter(
        (type) => type !== choosenType,
      );
      setTypesPokemon(ArrayWithoutType);
    } else {
      setTypesPokemon([...typesPokemon, choosenType]);
    }
  }
  const filterList = pokemons
    .filter((pokemon) => pokemon.name.includes(searchPokemon))
    .filter((pokemon) => {
      const checkFilterTypes = typesPokemon.reduce((acc, cur) => {
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
          <PokemonCard key={id} name={name} types={types} img={img} id={id} />
        ))}
      </div>
      {isEmpty && <div>Nie ma żadnych pokemonów o takiej nazwie</div>}
    </>
  );
}
