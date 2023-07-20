const Sequelize = require('sequelize');
const db = require('./models/employee');
const sequelize = new Sequelize('meghana_db', 'meghanagaddam', '', {
    host: 'localhost',
    dialect: 'postgres'
});
module.exports = sequelize;
