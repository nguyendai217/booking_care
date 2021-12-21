import db from "../models/index";
let handleLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let userExist = await checkUserEmail(email);
      if (userExist) {
        // compare password
        resolve("user exist");
      } else {
        userData.errCode = 1;
        userData.errMess = "Email is not exist !";
        resolve(userData);
      }
    } catch (error) {
      reject(error);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });

      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  handleLogin: handleLogin,
};
