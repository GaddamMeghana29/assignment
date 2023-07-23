const Employee = require("./models/Employee");
const Project = require("./models/Project");
const ProjectAssignment = require("./models/ProjectAssignment");


Employee.belongsToMany(Project, { through: ProjectAssignment });
Project.belongsToMany(Employee, { through: ProjectAssignment });


module.exports = {
  Employee,
  Project,
  Role,
  ProjectAssignment,
};
