const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authenticate = async (req, res, next) => {
  let token;
  
    try {
      token = req.headers.authorization.split(" ")[1];
     
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.body.userId=decoded.id;
    
      next();
    } catch (error) {
      res.status(401).json("Not authorized, token failed");
    }
  }

module.exports = authenticate;