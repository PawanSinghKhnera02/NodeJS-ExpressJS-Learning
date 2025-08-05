const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "02June@1997",
  database: "airbnb",
});

module.exports = pool.promise();
