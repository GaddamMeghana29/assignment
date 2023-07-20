const Sequelize = require('sequelize');
const sequelize = new Sequelize('meghana_db', 'meghanagaddam', '', {
    host: 'localhost',
    dialect: 'postgres'
});
module.exports = sequelize;
