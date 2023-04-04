const NavBar = ({pokemonIndex, setPokemonIndex, pokemonList})=> {
  
  const handleClickNext = () => {
    setPokemonIndex((pokemonIndex + 1) % pokemonList.length)
  };
    
  const handleClickPrevious = () => {
    setPokemonIndex((pokemonIndex - 1) % pokemonList.length)
  };

return(
  <nav>
    {pokemonIndex > 0 && <button onClick={handleClickPrevious}>Précédent</button>} 
    {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickNext}>Suivant</button>} 
  </nav>
)

};

export default NavBar;