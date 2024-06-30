// src/controller/userController.js
const User = require("../model/User");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const userController = {
  register: async (req, res, next) => {
    try {
      const { username, email, password, gender, address } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) throw createError.Conflict("Email already in use");

      const newUser = new User({ username, email, password, gender, address });
      const savedUser = await newUser.save();

      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) throw createError.NotFound("User not found");

      const isMatch = await user.isValidPassword(password);
      if (!isMatch) throw createError.Unauthorized("Invalid credentials");

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
      next(error);
    }
  },

  getUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) throw createError.NotFound("User not found");

      res.status(200).json({ message: "User retrieved successfully", data: user });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
