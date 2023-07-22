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
  },
  {
    sequelize,
    modelName: "ProjectAssignment",
  }
);

module.exports = ProjectAssignment;