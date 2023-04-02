import PropTypes from "prop-types";


function PokemonCard({pokemon}) {
    return (
      <div>
        {/* {pokemon[0].name}  */}
        {/* <img src={pokemon[0].imgSrc} alt="photo" /> */}
    </div>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;