const { mongoose } = require("mongoose");
const mysql = require("mysql2/promise");
require("dotenv").config();

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit:10,
//   queueLimit:0,
// });

const dbState = [{
  value: 0,
  label: "disconnected"
},
{
  value: 1,
  label: "connected"
},
{
  value: 2,
  label: "connecting"
},
{
  value: 3,
  label: "disconnecting"
}];



const connection = async () => {
  try {
    await mongoose.connect("mongodb://root:123456@localhost:27017");
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
  } catch (error) {
    console.log("error connection db mongo", error);
  }
};

module.exports = {
  connection,
};
