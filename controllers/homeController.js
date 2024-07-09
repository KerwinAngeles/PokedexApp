const GetAllPokemons = ((req, res, next) => {
    res.render('home/home', {
        pageTitle: 'Pokemon',
        isActiveHome: true
    });
});


module.exports = {
    GetAllPokemons,
};

