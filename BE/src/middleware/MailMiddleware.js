const createError = require("http-errors");
const client = require("../config/connection_redis");
require("dotenv").config();
const mailMiddleware = {
    verifyOtp: async (userIdOtp, otp)=>{
        return new Promise((resolve,reject)=>{
          client.get(userIdOtp,(err,reply)=>{
            if(err) return reject(createError.NotFound('This token does not exist'));
            if(otp === reply) return resolve(otp);
            return reject(createError.InternalServerError())
          })
        })
      }
}
module.exports = mailMiddleware;