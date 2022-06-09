const mysql = require("mysql2");
class Db {
  static getConnection() {
    const pool = mysql.createPool({
      connectionLimit: 20,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    return pool;
  }
}
module.exports = Db;
