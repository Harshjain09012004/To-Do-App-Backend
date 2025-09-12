const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/server.config");

function authMiddleware(req, res, next) {
  try {
    if(!req.cookies){
        return res.status(401).json({ 
            success: false,
            message: "No cookie, authorization denied",
            error: {}, body: {}
        });
    }

    const token = req.cookies.token;
    if(!token){
      return res.status(401).json({ 
        success: false,
        message: "No token, authorization denied",
        error: {}, body: {}
      });
    }

    jwt.verify(token, jwtSecret);
    next();
  } 
  catch(err){
    return res.status(401).json({ 
        succes: false,
        message: "Invalid or expired token" ,
        body: {}, error: err
    });
  }
}

module.exports = authMiddleware;