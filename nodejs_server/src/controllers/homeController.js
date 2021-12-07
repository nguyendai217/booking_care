let getHomePage = (req, res) => {
  return res.render("home.ejs");
};

// export object
module.exports = {
  getHomePage: getHomePage,
};
