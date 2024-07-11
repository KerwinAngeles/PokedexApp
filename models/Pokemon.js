const Sequelize = require('sequelize');
const sequelize = require('../context/appContext');

const Pokemon = sequelize.define('pokemons', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    photo: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

module.exports = Pokemon;