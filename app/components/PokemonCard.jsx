import Link from 'next/link';
import CatchButton from './CatchButton';
import styles from './pokemon_card.module.css';
import mapping from './mapping_function_for_color';
import styles2 from './types.module.css';

export default function PokemonCard({ name, img, types, id }) {
  return (
    <div className={styles.card}>
      <Link href={`/pokemon/${id}`}>
        <div>{name}</div>
      </Link>
      <img src={img} alt={`Obrazek_${name}`} />
      <div className={styles2.types}>
        {types.map((type) => {
          const color = mapping(type);
          return (
            <div style={{ color: color }} key={type}>
              {type}
            </div>
          );
        })}
      </div>
      <CatchButton name={name}></CatchButton>
    </div>
  );
}
