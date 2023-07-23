const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: "postgres",
  logging: false,
});
module.exports = sequelize;
