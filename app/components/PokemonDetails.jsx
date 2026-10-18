import styles from './pokemon_card_with_details.module.css';
import Link from 'next/link';
import mapping from './mapping_function_for_color';

export default function PokemonCardWithDetails({ name, types, img }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link href={`/`}>Strona Główna</Link>
        <div>{name}</div>
        <div>
          {types.map((type) => {
            const color = mapping(type);
            return (
              <div style={{ color: color }} key={type}>
                {type}
              </div>
            );
          })}
        </div>
        <img src={img} alt="pokemon_pic"></img>
        <div>Sekcja z dodatkowymi informacjami jak je dostanę</div>
      </div>
    </div>
  );
}
