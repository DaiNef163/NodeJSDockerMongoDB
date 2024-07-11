const express = require("express");
const {
  getUsersAPI,
  postCreateUserAPI,
  putEditAPI,
  DeleteAPI,
  postUploadSinglefileAPI,
  postuploadMultipleFile,
} = require("../controllers/apiController");
const {
  postCreateCustomer,
  getDisplayCustomer,
  getUpdateCustomer,
  postUpdateCustomer,
  getDeleteCustomer,
  postDeleteCustomer,
  deleteACustomer,
} = require("../controllers/customerController");

const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putEditAPI);
routerAPI.delete("/users", DeleteAPI);

routerAPI.post("/file", postUploadSinglefileAPI);
routerAPI.post("/files", postuploadMultipleFile);

routerAPI.get("/customer", getDisplayCustomer);


routerAPI.post("/create-customer", postCreateCustomer);

routerAPI.get("/update-customer/:id", getUpdateCustomer);
routerAPI.post("/update-customer", postUpdateCustomer);

routerAPI.get("/delete-customer/:id", getDeleteCustomer);
routerAPI.post("/delete-customer", postDeleteCustomer);

routerAPI.delete("/customers",deleteACustomer)

module.exports = routerAPI;
