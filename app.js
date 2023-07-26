const sequelize = require("./config.js");
const { insertDataFromCSV } = require("./insertData.js");
const { getEmployeesNotPartOfAnyProject,getAllProjectsWithEmployees,getProjectDetailsOfEmployee,getTotalContributionPercentage} = require("./reports.js");

const nconf = require("nconf");
const path = require("path");

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
    console.log("Models have been synchronized with the database.");
    insertDataFromCSV();
    getEmployeesNotPartOfAnyProject(); 

    
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });