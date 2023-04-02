import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  
  const handleClickNext = () => {
      setPokemonIndex((pokemonIndex + 1) % pokemonList.length)
  };

  const handleClickPrevious = () => {
    setPokemonIndex((pokemonIndex - 1) % pokemonList.length)
  };

  return (
    <div className="App">
      <div>
      <PokemonCard pokemon={pokemonList}/>
      <div>{pokemonList[pokemonIndex].name}</div>
      <img src={pokemonList[pokemonIndex].imgSrc} alt={pokemonList[pokemonIndex].name}/>
      {pokemonIndex > 0 && <button onClick={handleClickPrevious}>Précédent</button>} 
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickNext}>Suivant</button>} 
      </div>
    </div>
  )
}

export default App
