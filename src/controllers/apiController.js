const User = require("../models/user");
const Customer = require("../models/customer")

const { uploadSingleFile, uploadMultipleFile } = require("../services/fileService");

const getUsersAPI = async (req, res) => {
  const results = await User.find();
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let { email, name, city } = req.body;

  let user = await User.create({
    name,
    email,
    city,
  });

  // console.log(results);
  // res.redirect("/display");
  return res.status(200).json({
    EC: 0,
    data: user,
  });
};

const putEditAPI = async (req, res) => {
  let { email, name, city } = req.body;
  let id = req.body.id;

  let user = await User.updateOne(
    { _id: id },
    {
      name: name,
      email: email,
      city: city,
    }
  );
  return res.status(200).json({
    EC: 0,
    data: user,
  });
};

const DeleteAPI = async (req, res) => {
  let { id, email, name, city } = req.body;

  let user = await User.deleteOne({ _id: id });
  return res.status(200).json({
    EC: 0,
    data: user,
  });
};

const postUploadSinglefileAPI = async (req, res) => {
  console.log("req.file", req.files);

  console.log("check array",Array.isArray(req.files.image));
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return ;
  }
  uploadSingleFile(req.files.image);
  res.send("ok file");
};
const postuploadMultipleFile = async (req, res) => {
  console.log("req.file", req.files);

  console.log("check array",Array.isArray(req.files.image));
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return ;
  }
  uploadMultipleFile(req.files.image);
  res.send("ok file");
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putEditAPI,
  DeleteAPI,
  postUploadSinglefileAPI,
  postuploadMultipleFile
};
