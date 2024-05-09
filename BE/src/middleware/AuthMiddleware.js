const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const client = require("../config/connection_redis");
require("dotenv").config();
const authMiddleware = {
  verifyAccesstoken: async (req, res, next) => {
    if (!req.headers.authorization) return next(createError.Unauthorized());
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
      if (err) {
        if (err.name === "JsonWebTokenError")
          return next(createError.Unauthorized());
        return next(createError.Unauthorized(err.message));
      }
      console.log(payload);
      req.payload = payload;
      next();
    });
  },
  verifyRefreshToken: async (refreshToken) =>{
   return new Promise((resolve,reject)=>{
      jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY,(err,payload)=>{
         if(err) return reject(err);
         client.get(payload.userId,(err,reply)=>{
            if(err) return reject(createError.InternalServerError());
            if(refreshToken === reply) return resolve(payload);
            return reject(createError.Unauthorized())
         })
         
      })
   })
  }
};
module.exports = authMiddleware;
