const Pokemons = require('../models/Pokemon');
const Regions = require('../models/Region');
const Type = require('../models/Type');


const GetAllPokemons = ((req, res, next) => {
    Pokemons.findAll({include:[{model:Regions}, {model: Type}]}).then((result) => {
        const pokemons = result.map((result) => result.dataValues);
        res.render('mantPokemons/index', {
            pageTitle: 'Pokemon',
            isActivePokemons: true,
            pokemons: pokemons,
            validator: true
        });
    }).catch((error) => {
        console.log(error);
    })
});

const GetCreatePokemon =((req, res, next) => {
    Regions.findAll().then((result) => {
        const regions = result.map((result) => result.dataValues);
        Type.findAll().then((resultType) => {
            const types = resultType.map((result) => result.dataValues);
            res.render('mantPokemons/savePokemon', {
                pageTitle: 'Create Pokemon',
                isActivePokemons: true,
                regions: regions,
                types: types,
                validator: true
            });
        })
    })
});

const GetDeleteConfirm = ((req, res, next) => {
    const id = req.params.pokemonId;
    res.render('mantPokemons/confirm', {
        pageTitle: 'Delete',
        isActivePokemons: true,
        id: id
    })
})

const GetEditPokemon = ((req, res, next) => {
    const id = req.params.pokemonId;
    Pokemons.findOne({where: {id: id}}).then((result) => {
    
        const pokemon = result.dataValues;
        if(!pokemon){
            res.redirect('/mantPokemons/index');
        }
        Regions.findAll().then((result) => {
            const regions = result.map((result) => result.dataValues);
            Type.findAll().then((resulType) => {
                const types = resulType.map((result) => result.dataValues);
                res.render('mantPokemons/savePokemon', {
                    pageTitle: 'Edit Pokemon',
                    isActivePokemons: true,
                    editMode: true,
                    pokemon: pokemon,
                    types,
                    regions, 
                    validator: true
                });
            })
        })
    }).catch((error) => {
        console.log(error);
    })
});

const PostCreatePokemon = ((req, res, next) => {
    const name = req.body.name;
    const photo = req.body.photo;
    const region = req.body.regions;
    const type = req.body.types;
    Pokemons.create({

        name: name,
        photo: photo,
        regionId: region,
        typeId: type

    }).then((result) => {
        console.log(result);
        res.status(302).redirect('/mantPokemons/index');
    }).catch((error) =>{
        console.log(error);
    })
});

const PostEditPokemon = ((req, res, next) => {
    const name = req.body.name;
    const photo = req.body.photo;
    const id = req.body.id;
    const region = req.body.regions;
    const type = req.body.types;

    Pokemons.update({name: name, photo: photo, regionId: region, typeId: type}, {where:{id:id}}).then((result) => {
        console.log(result);
        res.redirect('/mantPokemons/index');
    }).catch((error) => {
        console.log(error);
    })
})


const PostDeletePokemon = ((req, res, next) => {
    const id = req.body.id;
    Pokemons.destroy({where: {id:id}}).then((result) => {
        console.log(result);
        res.redirect('/mantPokemons/index');
    }).catch((error) => {
        console.log(error);
    });
});


module.exports = {
    GetAllPokemons,
    GetCreatePokemon,
    GetEditPokemon,
    GetDeleteConfirm,
    PostCreatePokemon,
    PostEditPokemon,
    PostDeletePokemon
};

