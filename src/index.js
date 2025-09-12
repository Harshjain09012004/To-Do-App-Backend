const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const apiRouter = require("./routes");
const { port } = require("./config/server.config");
const { connectToMongoDB, pool } = require('./config/db.config');
const checkMySqlAndCreateTable = require("./models/user.model");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}));

app.use("/api", apiRouter);

app.get("/", (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Server Working"
    })
});

app.get("/dropTable", async (req, res)=>{
  try{
    await pool.query("DROP TABLE IF EXISTS users");
    return res.status(200).json({
      success: true,
      message: "Tables Dropped", 
      err: {}, body: {}
    })
  }   
  catch(err){
    return res.status(500).json({
      success: false,
      message: "Something gone wrong", 
      err: err, body: {}
    })
  }
});

app.get("/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(port, ()=>{
    console.log("Server is listening on Port :", port);
    connectToMongoDB();
    checkMySqlAndCreateTable();
})
