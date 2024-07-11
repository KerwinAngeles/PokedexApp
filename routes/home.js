const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.GetAllPokemons);
router.post('/get-pokemon-by-name', homeController.GetPokemonByName);
router.post('/get-pokemons-by-regions', homeController.GetPokemonsByRegions);

module.exports = router;
