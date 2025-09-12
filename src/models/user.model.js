const { pool } = require("../config/db.config");

async function checkMySqlAndCreateTable() {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await pool.query(sql);
    console.log("MySql Connected!, Tables Created");
  } catch (err) {
    console.error("Error in MySql", err.message);
  }
}

module.exports = checkMySqlAndCreateTable;