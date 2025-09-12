const mongoose = require('mongoose');
const mysql = require("mysql2/promise");
const {
  mysql_host, mysql_name, 
  mysql_password,
  mysql_port, mysql_user,
  mongodb_url
} = require("../config/server.config");

const pool = mysql.createPool({
  host: mysql_host,
  port: mysql_port,
  user: mysql_user,
  password: mysql_password,
  database: mysql_name,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function connectToMongoDB(){
  try{
    await mongoose.connect(mongodb_url);
    console.log("Connected to the MONGO_DB");
  }
  catch(error){
    console.log("Unable to connect to the MONGO_DB server");
    console.log(error);
  }
}

module.exports = {
  connectToMongoDB, pool
};