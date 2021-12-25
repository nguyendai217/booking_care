import user from "../services/userService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    res.status(500).json({
      errorCode: 1,
      message: "Input email or password is empty.",
    });
  }

  let userData = await user.handleLogin(email, password);
  return res.status(200).json({
    data: userData,
  });
};

module.exports = {
  handleLogin: handleLogin,
};
