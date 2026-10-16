import Link from 'next/link';
import CatchButton from './CatchButton';

export default function PokemonCard({ name, img, types, id }) {
  return (
    <div>
      <Link href={`/pokemon/${id}`}>
        <div>{name}</div>
      </Link>
      <img src={img} alt={`Obrazek_${name}`} />
      {types.map((type) => (
        <div key={type}>{type}</div>
      ))}
      <CatchButton name={name}></CatchButton>
    </div>
  );
}
