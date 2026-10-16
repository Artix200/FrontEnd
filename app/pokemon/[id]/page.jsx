import PokemonCard from '@/app/components/PokemonCard';
import { pokemons } from '@/app/data/pokemon';
import Link from 'next/link';

export default async function PokemonDetails({ params }) {
  const { id } = await params;
  const choosen_pokemon = pokemons.filter(
    (pokemon) => pokemon.id.toString() === id,
  );
  console.log(choosen_pokemon);
  return (
    <div>
      <PokemonCard
        name={choosen_pokemon[0].name}
        img={choosen_pokemon[0].id}
        types={choosen_pokemon[0].types}
      ></PokemonCard>
      <Link href="/">Strona główna</Link>
    </div>
  );
}
