const { connection } = require("../config/database");

const getHomePage = (req, res) => {
  res.render("home.ejs");
};
const getDisplay = async (req, res) => {
  const [users] = await connection.query("SELECT * FROM Users");
  res.render("display.ejs", { user: users });
};
const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  try {
    let [results, fields] = await connection.query(
      `INSERT INTO Users (email, name, city) VALUES ('${email}', '${name}', '${city}')`
      // [email, name, city],
    );
    console.log(results);
    res.redirect("/display");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getEdit = async (req, res) => {
  let id = req.params.id;
  console.log("check id", id);
  let { email, name, city } = req.body;
  let [results, fields] = await connection.query(
    `SELECT * FROM Users WHERE id = '${id}'`
    // [email, name, city],
  );
  let user = results && results.length > 0 ? results[0] : {};
  res.render("edit.ejs", { user: user });
};

const postEdit = async (req, res) => {
  let { id, email, name, city } = req.body;

  console.log("check id", id);

  try {
    let [results, fields] = await connection.query(
      `UPDATE Users 
      SET email = "${email}",name = "${name}",city = "${city}" 
      WHERE id ="${id}" `,
      [email, name, city, id]
    );
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
  let [results, fields] = await connection.query(
    `SELECT * FROM Users WHERE id = '${id}'`
    // [email, name, city],
  );
  console.log("check réults", results);
  let user = results && results.length > 0 ? results[0] : {};
  res.render("delete.ejs", { user: user });
};

const postDelete = async (req, res) => {
  let { id, email, name, city } = req.body;

  console.log("check id", id);

  try {
    let [results, fields] = await connection.query(
      `DELETE FROM Users WHERE id = "${id}"`
    );

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
