const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config");

class Project extends Model {}

Project.init(
  {
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Project",
    timestamps: false,
  }
);

module.exports = Project;
