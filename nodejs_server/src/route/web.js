import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let intWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/getAllData", homeController.getAllData);

  router.post("/api/login", userController.handleLogin);
  return app.use("/", router);
};

module.exports = intWebRoutes;
