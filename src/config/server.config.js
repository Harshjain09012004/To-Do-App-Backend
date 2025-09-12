const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port : process.env.PORT,
    mysql_host: process.env.MYSQL_HOST,
    mysql_port: process.env.MYSQL_PORT,
    mysql_user: process.env.MYSQL_USER,
    mysql_password: process.env.MYSQL_PASSWORD,
    mysql_name: process.env.MYSQL_NAME,
    mongodb_url: process.env.MONGODB_URL,
    jwtSecret: process.env.JWT_SECRET
};