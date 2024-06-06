const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const app = express();
const webRoutes = require("./routes/web");
const { connection } = require("./config/database");



require("dotenv").config();

app.use(express.json( )); // Used to parse JSON bodies
app.use(express.urlencoded( )); //Parse URL-encoded bodies


console.log(process.env.PORT);

app.use("/", webRoutes);

const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

configViewEngine(app);




app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
