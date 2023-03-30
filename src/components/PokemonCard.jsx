
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

function PokemonCard() {

    return (
      <div>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
        </div>
      ))}
    </div>
  )
}


export default PokemonCard;