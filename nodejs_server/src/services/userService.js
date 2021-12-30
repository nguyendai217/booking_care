import bcrypt from "bcryptjs";
import db from "../models/index";
let handleLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};

      // check user exist
      // let userExist = await checkUserEmail(email);
      let userExist = await db.User.findOne({
        where: { email: email },
      });

      if (userExist) {
        let user = await db.User.findOne({
          attributes: ["email", "roleId", "password"],
          where: { email: email },
          raw: true,
        });

        if (user) {
          // compare password
          let checkPass = bcrypt.compareSync(password, user.password);
          if (checkPass) {
            userData.errCode = 0;
            userData.errMess = "OK";
            userData.user = user;
          } else {
            userData.errCode = 2;
            userData.errMess = "Password is not correct !";
          }
        } else {
          userData.errCode = 1;
          userData.errMess = "User is not found!";
        }
      } else {
        userData.errCode = 3;
        userData.errMess = "Email is not exist !";
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

// let checkUserEmail = (userEmail) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let user = await db.User.findOne({
//         where: { email: userEmail },
//       });
//       if (user) {
//         resolve(true);
//       } else {
//         resolve(false);
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// let comparePassword = (pass) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let user = await db.User.findOne({
//         where: { email: userEmail },
//       });

//       if (user) {
//         let checkPassword = await bcrypt.compareSync(pass, user.password);
//       }

//       let password = user.password;
//       bcrypt.compareSync(password, hash);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

module.exports = {
  handleLogin: handleLogin,
};
