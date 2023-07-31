const sequelize = require("./config.js");
const { insertDataFromCSV } = require("./insertData.js");
const {getEmployeesNotPartOfAnyProject, getAllProjectsAndTeamMembers,getUnderutilizedEmployees,} = require("./reports.js");

const nconf = require("nconf");
const path = require("path");

nconf.file({ file: path.join(__dirname, "config.json") });

const DB_NAME = nconf.get("DB_NAME");
const DB_USERNAME = nconf.get("DB_USERNAME");
const DB_PASSWORD = nconf.get("DB_PASSWORD");
const DB_HOST = nconf.get("DB_HOST");
const DB_DIALECT = nconf.get("DB_DIALECT");
const DB_logging = nconf.get("logging");

const { Command } = require("commander");
const program = new Command();

program
  .option("-d --insert-data", "Insert the data from CSV files")
  .option(
    "-e --employees-not-in-any-project",
    "Get employees not part of any project"
  )
  .option("-p --project-details", "Get project details of an employee")
  .option("-u --under-utilized", "Get list underultilized employees")

  .parse(process.argv);
sequelize
  .authenticate()
  .then(async () => {
    console.log(
      "Connection to the database has been established successfully."
    );
    console.log("Models have been synchronized with the database.");

    if (program.insertData) {
      await insertDataFromCSV();
    }

    if (program.employeesNotInAnyProject) {
      await getEmployeesNotPartOfAnyProject();
    }

    if (program.projectDetails) {
      await getAllProjectsAndTeamMembers();
    }

    if (program.underUtilized) {
      await getUnderutilizedEmployees();
    }

    sequelize.close();
  })

  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });