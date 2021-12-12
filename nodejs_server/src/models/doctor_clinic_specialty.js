"use strict";
// phong kham
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctorClinicSpecialty extends Model {
    static associate(models) {
      // define association here
    }
  }
  DoctorClinicSpecialty.init(
    {
      doctorId: DataTypes.INTEGER,
      clinicId: DataTypes.INTEGER,
      specialId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DoctorClinicSpecialty",
      tableName: "doctor_clinic_specialty",
    }
  );
  return DoctorClinicSpecialty;
};
