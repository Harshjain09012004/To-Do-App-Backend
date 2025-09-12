const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { getUser, insertUser } = require("../repository/users.repo");
const { jwtSecret } = require("../config/server.config");

const bcryptSalt = bcrypt.genSaltSync(10);
const authenticationRouter = express.Router();

authenticationRouter.post("/login", async (req, res)=>{
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Login Failed",
                error: "Missing Details",
                body: {}
            });
        }

        const userData = await getUser(email);
        if(!userData){
            return res.status(401).json({
                success: false,
                message: "Login Failed",
                error: "User Not Exists",
                body: {}
            })
        }

        const passOk = bcrypt.compareSync(password, userData.password);
        if(!passOk){
            return res.status(401).json({
                success: false,
                message: "Login Failed",
                error: "Wrong Password",
                body: {}
            })
        }

        const token = jwt.sign({
            name: userData.name,
            userId: userData.id
        }, 
        jwtSecret, {}, (err, token)=>{
            if(err) throw err;
            res.cookie('token',token);
        });

        return res.status(200).json({ 
            success: true,
            message: "Login Successful",
            body: {name: userData.name, userId: userData.id},
            err: {}
        });
    }
    catch(err){
        console.log("Login", err);
        return res.status(500).json({
            success: false,
            message: "Login Failed",
            error: err,
            body: {}
        });
    }
});

authenticationRouter.post("/register", async (req, res)=>{
    try{
        const userData = req.body;
        if(!userData.name || !userData.email || !userData.password){
            return res.status(400).json({
                success: false,
                message: "Registration Failed",
                error: "Missing Details",
                body: {}
            });
        }
        
        //Hashing the given password;
        userData.password = bcrypt.hashSync(userData.password, bcryptSalt);
        console.log("At Routes, Data :", userData);

        const response = await insertUser(userData);
        if(!response){
            return res.status(500).json({
                success: false,
                message: "Some Error Occured",
                error: {},
                body: {}
            });
        }

        return res.status(200).json({
            success: true,
            message: "User Registered",
            error: {},
            body: {}
        });
    }
    catch(err){
        console.log("Registrationg", err);
        return res.status(500).json({
            success: false,
            message: "",
            error: err,
            body: {}
        });
    }
});

module.exports = authenticationRouter;