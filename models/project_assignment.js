const sequelize = require("../config");
const { DataTypes, Model } = require("sequelize");

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
   
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ProjectAssignment",
    timestamps:false,
    tableName: "ProjectAssignments",
  }
);

module.exports = ProjectAssignment;
