const sequelize = require("../config");
const { DataTypes, Model } = require("sequelize");
 const Employee = require("./employee");
 const Project = require("./project");
 const Role = require("./role");


class ProjectAssignment extends Model {}

ProjectAssignment.init(
  {
    assignment_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    contribution_percentage: {
      type: DataTypes.INTEGER,
    },

    EmployeeId: {
      type: DataTypes.STRING,
      references: {
        model: Employee,
        key: "employee_id",
      }
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      references: {
        model: Project,
        key: "project_id", 
      },
    },
    RoleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Role,
        key: "role_id", 
      }
    },
  },
  {
    sequelize,
    modelName: "ProjectAssignment",
  }
);

module.exports = ProjectAssignment;