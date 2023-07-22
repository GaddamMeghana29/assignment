const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config.js");

class Project extends Model {}

Project.init(
  {
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    name_of_the_project: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_of_the_client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Project",
  }
);

module.exports = Project;
