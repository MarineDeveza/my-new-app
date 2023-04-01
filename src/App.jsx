import './App.css'

import PokemonCard from "./components/PokemonCard"

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <div className="App">
      <div>
      <PokemonCard pokemon={pokemonList}/>
      </div>
    </div>
  )
}

export default App
