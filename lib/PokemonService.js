const pokemonData = require('../pokemon.json');

const pokemonService = {
    getAllPokemon: () => {
        return pokemonData;
    },

    // Returns only donuts with a specific batter type
    getDonutsByBatter: (batterType) => {
        // TODO: Implement this
        return pokemonData;
    }
};

// Specifying what to export
module.exports = pokemonService;
