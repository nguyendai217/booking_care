import user from "../services/userService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    res.status;
  }

  let userData = await user.handleLogin(email, password);
  return res.status(200).json({
    userData,
  });
};

module.exports = {
  handleLogin: handleLogin,
};
