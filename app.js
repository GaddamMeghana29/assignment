const sequelize = require("./config.js");

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