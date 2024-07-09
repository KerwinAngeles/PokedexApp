const Sequelize = require('sequelize');
const sequelize = require('../context/appContext');

const Type = sequelize.define('type', {
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

module.exports = Type