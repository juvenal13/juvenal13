const Db = require("../config/db");

class Model {
  constructor() {
    this.class = this.constructor.name;
    this.table = this.class.replace("Model", "").toLowerCase();
  }

  async sqlQuery(sql, params) {
    return new Promise(function (resolve, reject) {
      Db.getConnection().query(sql, params, function (error, results) {
        console.log("sql ", sql);
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  async create() {
    let keys = [];
    let inter = [];
    let values = [];
    for (var [key, value] of Object.entries(this)) {
      if (value !== null && key !== "class" && key !== "table") {
        keys.push(key);
        inter.push("?");
        values.push(value);
      }
    }

    let arrayKeys = keys.join(",");
    let arrayInter = inter.join(",");

    return await this.sqlQuery(
      `INSERT INTO ${this.table} (${arrayKeys})
      VALUES (${arrayInter})`,
      values
    );
  }
  async all() {
    return this.sqlQuery(`SELECT * FROM ${this.table}`);
  }

  async findById(id_value, id_name = "id") {
    return await this.sqlQuery(
      `SELECT * 
        FROM ${this.table} 
        WHERE  ${id_name}  = ? `,
      [id_value]
    );
  }

  async update() {
    let keys = [];
    let values = [];

    // On boucle pour éclater le tableau
    for (var [key, value] of Object.entries(this)) {
      if (value !== null && key !== "class" && key !== "table") {
        keys.push(`${key} = ?`);
        values.push(value);
      }
    }
    values.push(this.id);
    // On transforme le tableau "champs" en une chaine de caractères
    arrayKeys = keys.join(",");
    // On exécute la requête
    return await this.sqlQuery(
      `UPDATE  ${this.table}  SET  ${arrayKeys}  WHERE id = ?`,
      values
    );
  }

  async delete($id, $id_name) {
    return await this.sqlQuery(
      `DELETE FROM ${this.table} WHERE ${$id_name} = ?`,
      $id
    );
  }
}

module.exports = Model;
