const express = require('express');
const pokemonController = require('./controllers/pokemon');
const router = express.Router();

router.get('/pokemon', pokemonController.getPokemon);
router.get('/pokemon-moves', pokemonController.getPokemonMoves);
module.exports = router;
