const Pokemons = require('../models/Pokemon');
const Regions = require('../models/Region');
const Type = require('../models/Type');


const GetAllPokemons = ((req, res, next) => {
    Pokemons.findAll({include:[{model:Regions}, {model: Type}]}).then((result) => {
        Regions.findAll().then((resultRegion) => {
            const pokemons = result.map((result) => result.dataValues);
            const regions = resultRegion.map((result) => result.dataValues);
            res.render('home/home', {
                pageTitle: 'Home',
                isActiveHome: true,
                pokemons: pokemons,
                hasPokemons: pokemons.length > 0,
                regions: regions,
                getPokemon: false,
                validator: true

            });
        })
       
    }).catch((error) => {
        console.log(error);
    })
});

const GetPokemonByName = ((req, res, next) => {
    const name = req.body.name;
    Pokemons.findOne({where: {name: name}, include:[{model:Regions}, {model: Type}]}).then((result) => {

    Regions.findAll().then((resultRegion) => {
        const regions = resultRegion.map((result) => result.dataValues);
        if(result === null){
            res.render('home/home', {
                pageTitle: `${name}`,
                isActiveHome: true,
                getPokemon: true,
                hasPokemon: false,
                pokemonName: name,
                regions: regions,
                validator: true
            });

        }else{
            const pokemon = result.dataValues;

        if(!pokemon){
            res.redirect('/');
        }

        res.render('home/home', {
            pageTitle: `${name}`,
            isActiveHome: true,
            pokemon: pokemon,
            getPokemon: true,
            hasPokemon: pokemon ? true : false,
            regions: regions,
            validator: true
        });
        }
    });
        
    });
});

const GetPokemonsByRegions = ((req, res, next) => {
    const regionId = req.body.region;
    
    Pokemons.findAll({where: {regionId: regionId}, include:[{model:Regions}, {model: Type}]}).then((result) =>{
       Regions.findAll().then((resultRegion) => {
            const pokemons = result.map((result) => result.dataValues);
            const regions = resultRegion.map((result) => result.dataValues);
            res.render('home/home', {
                pageTitle: 'Home',
                isActiveHome: true,
                pokemons: pokemons,
                hasPokemons: pokemons.length > 0,
                regions: regions,
                getPokemon: false,
                validator: true
            });
        })
    })
})

module.exports = {
    GetAllPokemons,
    GetPokemonByName,
    GetPokemonsByRegions
};

