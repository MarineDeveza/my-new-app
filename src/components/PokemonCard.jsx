
function PokemonCard({pokemon}) {
console.log(pokemon)
    return (
      <div>
        {pokemon[0].name} 
        <img src={pokemon[0].imgSrc} alt="photo" />
    </div>
  )
}


export default PokemonCard;