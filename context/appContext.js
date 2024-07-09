const Sequelize = require('sequelize');
const config = require('../config');
const sequelize = new Sequelize
(
    config.DB_NAME, 
    config.DB_ROOT, 
    config.DB_PASSWORD, 
    {
        dialect:'mysql',
        host: config.DB_HOST,
        port: config.DB_PORT
    }
);

module.exports = sequelize;