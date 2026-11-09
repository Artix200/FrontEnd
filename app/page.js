import HeaderJsx from './components/JsxHeader';
import './global.css';
import PokemonSection from './components/PokemonsPage';
//Jsx jest skrócony zapisem React który jest poźniej przekowertowany na React.createElement a ten następnie na operacje na DOM
// przez to musimy mieć jeden element rodzica przy zwracaniu jsx bo tak działa React.createElement(element, props, children)

export default function Home() {
  return (
    <div className="container_main">
      <HeaderJsx />
      <PokemonSection />
    </div>
  );
}
