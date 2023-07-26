const sequelize = require("./config.js");
const csv = require("csvtojson");
const Employee = require("./models/employee");
const Project = require("./models/project");
const ProjectAssignment = require("./models/project_assignment");

const employeesCSVFilePath =
  "csv_data/employees.csv";
const projectsCSVFilePath = "csv_data/projects.csv";
const projectAssignmentsCSVFilePath = "csv_data/project_assignment.csv";

const importData = async () => {
  try {
    const employees = await csv().fromFile(employeesCSVFilePath);
    const projects = await csv().fromFile(projectsCSVFilePath);
    const projectAssignments = await csv().fromFile(
      projectAssignmentsCSVFilePath
    );

    await Employee.bulkCreate(employees, { ignoreDuplicates: true });
    await Project.bulkCreate(projects, { ignoreDuplicates: true });
    await ProjectAssignment.bulkCreate(projectAssignments, { ignoreDuplicates: true });

    console.log("Data import completed successfully");
  } catch (error) {
    console.error("Error importing data:", error);
  }
};

async function insertDataFromCSV() {
  try {
    await sequelize.sync({ force: true });
    await importData();
  } catch (error) {
    console.error("Unable to connect to the database or insert data:", error);
  }
}

module.exports = { insertDataFromCSV };
