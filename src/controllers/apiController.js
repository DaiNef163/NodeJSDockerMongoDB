const User = require("../models/user");

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

  console.log("check id", id);

  let user = await User.deleteOne({ _id: id });
  return res.status(200).json({
    EC: 0,
    data: user,
  });
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putEditAPI,
  DeleteAPI,
};
