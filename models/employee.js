

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config");

class Employee extends Model {}

Employee.init(
  {
    employee_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_joining: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Employee",
    timestamps:false,
  }
);

module.exports = Employee;
