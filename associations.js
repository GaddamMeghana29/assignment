const Employee = require("./models/employee");
const Project = require("./models/project");
const ProjectAssignment = require("./models/project_assignment");

Employee.belongsToMany(Project, { through: ProjectAssignment });
Project.belongsToMany(Employee, { through: ProjectAssignment });

module.exports = {
  Employee,
  Project,
  ProjectAssignment,
};
