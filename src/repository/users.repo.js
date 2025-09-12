const { pool } = require("../config/db.config");

async function getUser(email){
    const sql = `
        SELECT * FROM users
        WHERE email = ?
    `;

    const [rows] = await pool.query(sql, [email]);
    return rows[0];
}

async function insertUser({name, email, password}){
    const sql = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
    `;

    const response = await pool.query(sql, 
        [name, email, password]
    );

    if(response.affectedRows != 1) return {};
    return response;
}

module.exports = {
    getUser, insertUser
};