const Employee = require("./models/employee");
const Project = require("./models/project");
const ProjectAssignment = require("./models/project_assignment");


Employee.belongsToMany(Project, { through: ProjectAssignment });
Project.belongsToMany(Employee, { through: ProjectAssignment });
Employee.hasMany(ProjectAssignment);
ProjectAssignment.belongsTo(Employee);
Project.hasMany(ProjectAssignment);
ProjectAssignment.belongsTo(Project);

module.exports = { Employee, Project, ProjectAssignment };