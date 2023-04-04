import PropTypes from "prop-types";


const PokemonCard = ({ pokemon }) => {

    return (
      <div>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={`${pokemon.name} best pokemon ever`}/>
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
      </div>
    )
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;