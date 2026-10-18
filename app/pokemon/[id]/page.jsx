import { pokemons } from '@/app/data/pokemon';
import PokemonCardWithDetails from '@/app/components/PokemonDetails';

export default async function PokemonDetails({ params }) {
  const { id } = await params;
  const choosen_pokemon = pokemons.filter(
    (pokemon) => pokemon.id.toString() === id,
  );
  return (
    <div>
      <PokemonCardWithDetails
        name={choosen_pokemon[0].name}
        types={choosen_pokemon[0].types}
        img={choosen_pokemon[0].img}
      ></PokemonCardWithDetails>
    </div>
  );
}
