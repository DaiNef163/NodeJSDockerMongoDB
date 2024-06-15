const express = require("express");
const { getUsersAPI, postCreateUserAPI, putEditAPI, DeleteAPI, postUploadSinglefileAPI } = require("../controllers/apiController");

const routerAPI = express.Router();


routerAPI.get("/users",getUsersAPI);
routerAPI.post("/users",postCreateUserAPI);
routerAPI.put("/users",putEditAPI);
routerAPI.delete("/users",DeleteAPI);
routerAPI.post("/file",postUploadSinglefileAPI);

module.exports = routerAPI;
