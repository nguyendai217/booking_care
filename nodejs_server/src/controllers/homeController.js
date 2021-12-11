let getHomePage = (req, res) => {
  return res.render("home.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

// export object
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
};
