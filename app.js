const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('node:path');
const app = express();
const config = require('./config');
const routePokemon = require('./routes/pokemons');
const routeHome = require('./routes/home');
const routeRegion = require('./routes/region');
const routeType = require('./routes/type');
const errorController = require('./controllers/errorController');
const sequelize = require('./context/appContext');
const Regions = require('./models/Region');
const Types = require('./models/Type');
const Pokemons = require('./models/Pokemon');
const compareHelper = require('./utils/helpers/compare');

app.use(express.urlencoded({extended: false}));
app.engine('hbs', expressHbs.engine({
    layoutsDir:"views/layouts",
    defaultLayout:"main-layout",
    extname:"hbs",
    helpers: {
        equalValue: compareHelper.EqualValue,
    }
}));

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routeHome);
app.use(routePokemon);
app.use(routeRegion);
app.use(routeType);
app.use('/', errorController.noFound);

Pokemons.belongsTo(Types, {constraint: true, onDelete:'CASCADE'});
Types.hasMany(Pokemons);

Pokemons.belongsTo(Regions, {constraint: true, onDelete:'CASCADE'});
Regions.hasMany(Pokemons);

sequelize.sync().then(function(result) {
    console.log(result)
    app.listen(config.PORT, () => {
        console.log('app running on server: ' + config.PORT);
    })
}).catch(error => {
    console.log(error)
})
