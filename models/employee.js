const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config.js");

class Employee extends Model {}

Employee.init(

  {
    employee_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_joining: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Employee",
  }
);

module.exports = Employee;



  

