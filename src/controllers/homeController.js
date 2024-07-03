const { connection } = require("../config/database");

const User = require("../models/user");
const Customer = require("../models/customer");
const getHomePage = (req, res) => {
  res.render("home.ejs");
};
const getDisplay = async (req, res) => {
  // const [users] = await connection.query("SELECT * FROM Users");
  const users = await User.find();
  res.render("display.ejs", { user: users });
};
const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  try {
    // await User.create({
    //   email: email,
    //   name: name,
    //   city: city,
    // });
    await User.create({
      name,
      email,
      city,
    });

    // console.log(results);
    res.redirect("/display");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getEdit = async (req, res) => {
  let id = req.params.id;
  console.log("check id", id);
  // let { email, name, city } = req.body;
  const user = await User.findById(id).exec();

  // let user = results && results.length > 0 ? results[0] : {};
  res.render("edit.ejs", { user: user });
};

const postEdit = async (req, res) => {
  let { email, name, city } = req.body;
  let id = req.body.id;

  console.log("check id", id);

  try {
    await User.updateOne(
      { _id: id },
      {
        name: name,
        email: email,
        city: city,
      }
    );
    console.log(req.body);
    res.redirect("/display");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getDelete = async (req, res) => {
  let id = req.params.id;
  console.log("check id", id);
  let { email, name, city } = req.body;
  const user = await User.findById(id);

  // let user = results && results.length > 0 ? results[0] : {};
  res.render("delete.ejs", { user: user });
};

const postDelete = async (req, res) => {
  let { id, email, name, city } = req.body;

  console.log("check id", id);

  try {
    await User.deleteOne({ _id: id });

    res.redirect("/display");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  getHomePage,
  postCreateUser,
  getEdit,
  getDisplay,
  postEdit,
  getDelete,
  postDelete,
};
