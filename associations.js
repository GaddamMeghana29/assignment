const Employee = require("./models/employee");
const Project = require("./models/project");
const ProjectAssignment = require("./models/project_assignment");

Employee.hasMany(ProjectAssignment, { foreignKey: "employee_id" });
ProjectAssignment.hasMany(Project, { foreignKey: "project_id" });

Employee.belongsToMany(Project, {
  through: ProjectAssignment,
  foreignKey: "employee_id",
  otherKey: "project_id",
});
Project.belongsToMany(Employee, {
  through: ProjectAssignment,
  foreignKey: "project_id",
  otherKey: "employee_id",
});

module.exports = { Employee, Project, ProjectAssignment };
