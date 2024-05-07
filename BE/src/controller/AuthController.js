const User = require("../model/User");
const bcrypt = require("bcrypt");

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
        console.log('hi');
        User.find({ email })
          .then((result) => {
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
                      msg: "An error occured while saving  user",
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
};
module.exports = authController;