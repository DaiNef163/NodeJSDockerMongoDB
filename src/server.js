const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const app = express();
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const { connection } = require("./config/database");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Kitten = require("./models/user");
require("dotenv").config();

// app.use(express.json()); // Used to parse JSON bodies
// app.use(express.urlencoded()); //Parse URL-encoded bodies

// console.log(process.env.PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

configViewEngine(app);



(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("error connect to db", error);
  }
})();
