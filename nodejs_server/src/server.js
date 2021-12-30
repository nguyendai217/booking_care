import express from "express";
import bodyParser from "body-parser";
import intWebRoutes from "./route/web";
import path from "path";
require("dotenv").config();
import connectDB from "./config/connectDB";
import cors from "cors";

//config server
let app = express();
app.use(express.static(`${__dirname}/public`));

//config view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// config body-parser send data to server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config cors
app.use(cors({ origin: true }));

// config route
intWebRoutes(app);

connectDB();

let port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log("Nodejs is running on port: ", port);
});
