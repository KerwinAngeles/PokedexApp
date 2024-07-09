const Sequelize = require('sequelize');
const sequelize = require('../context/appContext');

const Region = sequelize.define('region', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Region;