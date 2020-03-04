const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  password: "",
  database: "grocerylist"
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connecteeeddd")
  }
});

module.exports = connection;
