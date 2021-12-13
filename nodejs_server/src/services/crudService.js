import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // hass password
      let hashPass = await hashPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPass,
        firstName: "Dai",
        lastName: "Nguyen",
        address: data.address,
        gender: data.gender, // 1 is Male, 0 is Female
        phoneNumber: data.phoneNumber,
        roleId: data.role,
        positionId: 1,
        image: "",
      });
      resolve("new User create !");
    } catch (error) {
      reject(error);
    }
  });
};

let hashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPass = await bcrypt.hashSync(password, salt);
      resolve(hashPass);
    } catch (error) {
      reject(error);
    }
  });
};

let getAllData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
  getAllData: getAllData,
};
