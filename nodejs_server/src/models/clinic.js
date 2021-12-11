"use strict";
// phong kham
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    static associate(models) {
      // define association here
    }
  }
  Clinic.init(
    {
      address: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Clinic",
    }
  );
  return Clinic;
};