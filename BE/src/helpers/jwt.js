const JWT = require("jsonwebtoken");
require("dotenv").config();
const client = require("../config/connection_redis");
const createError = require("http-errors");
const signAccessToken = async (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {
      userId,
    };
    const options = {
      expiresIn: "1m",
    };
    JWT.sign(payload, process.env.JWT_SECRET_KEY, options, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

const signRefreshToken = async (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {
      userId,
    };
    const options = {
      expiresIn: "1y",
    };
    JWT.sign(payload, process.env.JWT_REFRESH_KEY, options, (err, token) => {
      if (err) return reject(err);
      client.set(
        userId.toString(),
        token,
        "EX",
        365 * 24 * 60 * 60,
        (err, reply) => {
          if (err) return reject(createError.InternalServerError());
          return resolve(token);
        }
      );
    });
  });
};
module.exports = {
  signAccessToken,
  signRefreshToken,
};
