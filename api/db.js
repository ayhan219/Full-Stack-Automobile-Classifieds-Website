const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password, //database password,
  database, //database name
});


db.connect((err) => {
  if (err) {
    console.log("Something went wrong while connecting to DB");
    return;
  }
  console.log("Connected to MySQL");
});

module.exports = db;  