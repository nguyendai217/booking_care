"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      statusId: DataTypes.STRING, // key off allcode
      doctorId: DataTypes.INTEGER, // id user
      patientId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      timeType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Booking",
      tableName: "bookings",
    }
  );
  return Booking;
};
