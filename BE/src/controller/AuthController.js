const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userValidate, confirmPassword } = require("../helpers/validation");
const createError = require("http-errors");
const { signAccessToken, signRefreshToken } = require("../helpers/jwt");
const { verifyRefreshToken } = require("../middleware/AuthMiddleware");
const client = require("../config/connection_redis");

require("dotenv").config();

const authController = {
  register: async (req, res) => {
    try {
      // validate
      const { username, email, password } = req.body;
      console.log(req.body);

      if (username === "" || email === "" || password === "") {
        res.json({
          status: "error",
          msg: "Empty input fields ",
        });
      } else if (!/^[a-zA-Z]*$/.test(username)) {
        res.json({
          status: "error",
          msg: "Invalid username",
        });
      } else if (
        !/^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
          email
        )
      ) {
        res.json({
          status: "error",
          msg: "Invalid email",
        });
      } else if (password.length < 6) {
        res.json({
          status: "error",
          msg: "Password is too short",
        });
      } else {
        User.find({ email })
          .then((result) => {
            console.log(result);
            if (result.length) {
              res.json({
                status: "error",
                msg: "user with the provided email already exists",
              });
            } else {
              // create user
              // hashing password
              const saltRounds = 10;
              bcrypt.hash(password, saltRounds).then((hashed) => {
                const newUser = new User({
                  username: username,
                  email: email,
                  password: hashed,
                  // gender: 'male',
                  // address: 'fdhfdhfd'
                })
                  .save()
                  .then((result) => {
                    res.json({
                      status: "success",
                      msg: "register successfully",
                      data: result,
                    });
                  })
                  .catch((err) => {
                    res.json({
                      status: "error",
                      msg: "An error occured while saving user",
                    });
                  });
              });
            }
          })
          .catch((err) => {
            console.log(err);
            res.json({
              status: "error",
              msg: "An error occured while checking for existing user",
            });
          });
      }
    } catch (error) {
      res.json(error);
    }
  },
  refreshToken: async (req, res, next) => {
    try {
      const { refreshToken } = req.body;
      console.log(refreshToken);
      if (!refreshToken) throw createError.BadRequest();
      const { userId } = await verifyRefreshToken(refreshToken);
      const newAccessToken = await signAccessToken(userId);
      const newRefreshToken = await signRefreshToken(userId);
      res.json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { error } = userValidate(req.body);
      console.log(error);
      if (error) {
        throw createError(error.details[0].message);
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) throw createError.NotFound("User is not registered");
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw createError.Unauthorized();
      const { password: userPassword, ...others } = user._doc;
      const accessToken = await signAccessToken(user._id);
      const refreshToken = await signRefreshToken(user._id);
      res.json({
        status: "success",
        msg: "login successfully",
        user: others,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch (error) {
      next(error);
    }
  },
  logout: async (req, res, next) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) throw createError.BadRequest();
      const { userId } = await verifyRefreshToken(refreshToken);
      client.del(userId.toString(), (err, reply) => {
        if (err) {
          throw createError.InternalServerError();
        }
        res.json({
          msg: "Logout",
        });
      });
    } catch (error) {
      next(error);
    }
  },
  update_password: async (req, res, next) => {
    try {
      const { error } = confirmPassword(req.body);
      console.log(error);
      if (error) throw createError(error.details[0].message);
      const {userId,password} = req.body;
      const filter = {_id: userId}
      const saltRounds = 10;
      const hashed = await bcrypt.hash(password, saltRounds);
      const updateDoc = {
        $set: {
          password: hashed
        },
      };
      await User.updateOne(filter, updateDoc);
      return res.json({
        status:"success",
        msg: "update password successfully"
      })
    } catch (error) {
      next(error);
    }
  },
};
module.exports = authController;
