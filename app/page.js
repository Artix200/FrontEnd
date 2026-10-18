import HeaderJsx from './components/JsxHeader';
import HeaderReactCreate from './components/ReactCreateHeader';
import PokemonCard from './components/PokemonCard';
import { pokemons } from './data/pokemon';
import './global.css';

//Jsx jest skrócony zapisem React który jest poźniej przekowertowany na React.createElement a ten następnie na operacje na DOM
// przez to musimy mieć jeden element rodzica przy zwracaniu jsx bo tak działa React.createElement(element, props, children)

export default function Home() {
  return (
    <div className="container_main">
      <HeaderJsx />
      <HeaderReactCreate />
      <div className="pokemon_grid_container">
        {pokemons.map(({ id, name, types, img }) => (
          <PokemonCard key={id} name={name} types={types} img={img} id={id} />
        ))}
      </div>
    </div>
  );
}
