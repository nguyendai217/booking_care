import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import intWebRoutes from "./route/web";
require("dotenv").config();
import connectDB from "./config/connectDB";

//config server
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config view engine
viewEngine(app);
intWebRoutes(app);

connectDB();

let port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log("node js is running on port: ", port);
});
