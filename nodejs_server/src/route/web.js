import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let intWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  return app.use("/", router);
};

module.exports = intWebRoutes;