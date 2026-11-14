'use client';

import { useEffect, useState, useRef } from 'react';
import { pokemons } from '../data/pokemon';
import PokemonCard from './PokemonCard';
import types from '../data/types';
import { usePokemonCatch } from '../hooks/usePokemonCatch';

export default function PokemonSection() {
  const [searchPokemon, setSearchPokemon] = useState('');
  const [typesPokemons, setTypesPokemon] = useState([]);

  const [catchedPokemons, handleAdditionToCatched] = usePokemonCatch();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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

  const filterList = pokemons
    .filter((pokemon) => pokemon.name.includes(searchPokemon))
    .filter((pokemon) => {
      //true and false array depends if given pokemons has this type
      const checkFilterTypes = typesPokemons.reduce((acc, cur) => {
        pokemon.types.includes(cur) ? acc.push(true) : acc.push(false);
        return acc;
      }, []);
      console.log(checkFilterTypes);
      // do pokemon has all choosen types , if found false it dosent have at least one
      const validPokemon =
        checkFilterTypes.find((value) => value === false) === false
          ? false
          : true;
      return validPokemon;
    });
  const isEmpty = filterList.length == 0;

  return (
    <>
      <div>
        <input
          value={searchPokemon}
          onChange={handleInputChange}
          ref={inputRef}
        ></input>
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
