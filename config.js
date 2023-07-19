const Sequelize = require('sequelize');
const sequelize =   new Sequelize('meghana_db', 'meghanagaddam', '', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });