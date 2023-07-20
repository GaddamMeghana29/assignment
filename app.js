const sequelize = require("./config.js");
const Employee = require("./models/employee");

sequelize
  .authenticate()
  .then(async () => {
    console.log(
      "Connection to the database has been established successfully."
    );
    await sequelize.sync();
    console.log("Models have been synchronized with the database.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });