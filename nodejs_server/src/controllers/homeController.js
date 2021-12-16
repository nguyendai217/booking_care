import CURDService from "../services/crudService";

let getHomePage = (req, res) => {
  return res.render("home.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CURDService.createNewUser(req.body);
  console.log(message);
  return res.send("crud");
};

let getAllData = async (req, res) => {
  let data = await CURDService.getAllData();
  return res.send(JSON.stringify(data));
};
// export object
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  getAllData: getAllData,
};
