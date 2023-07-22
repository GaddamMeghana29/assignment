const sequelize = require("./config.js");

  const nconf = require("nconf");
  const path = require("path");
  const Employee = require("./models/employee");
  const Project = require("./models/project");
  const ProjectAssignment = require("./models/project_assignment");
  
  nconf.file({ file: path.join(__dirname, "config.json") });
 

 const DB_NAME = nconf.get("DB_NAME");
 const DB_USERNAME = nconf.get("DB_USERNAME");
 const DB_PASSWORD = nconf.get("DB_PASSWORD");
 const DB_HOST = nconf.get("DB_HOST");
 const DB_DIALECT = nconf.get("DB_DIALECT");
 const DB_logging = nconf.get("logging");

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