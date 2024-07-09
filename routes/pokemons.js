const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/mantPokemons/index', pokemonController.GetAllPokemons);
router.get('/mantPokemons/savePokemon', pokemonController.GetCreatePokemon);
router.get('/mantPokemons/editPokemon/:pokemonId', pokemonController.GetEditPokemon);
router.get('/mantPokemons/confirm/:pokemonId', pokemonController.GetDeleteConfirm);
router.post('/mantPokemons/savePokemon', pokemonController.PostCreatePokemon);
router.post('/mantPokemons/editPokemon', pokemonController.PostEditPokemon);
router.post('/mantPokemons/savePokemon', pokemonController.PostCreatePokemon);
router.post('/confirm-pokemon', pokemonController.PostDeletePokemon);


module.exports = router;