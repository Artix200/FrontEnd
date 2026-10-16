export default function PokemonCard({ name, img, types }) {
  return (
    <div>
      <div>{name}</div>
      <img src={img} alt={`Obrazek_${name}`} />
      {types.map((type) => (
        <div key={type}>{type}</div>
      ))}
    </div>
  );
}
