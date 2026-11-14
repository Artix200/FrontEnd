import { useEffect, useState } from 'react';

export function usePokemonCatch() {
  const [catchedPokemons, setCatchedPokemons] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('catch');
      if (stored) setCatchedPokemons(JSON.parse(stored));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem('catch', JSON.stringify(catchedPokemons));
  }, [catchedPokemons.length]);

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

  return [catchedPokemons, handleAdditionToCatched];
}
