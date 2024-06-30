// src/routes/user.js
const express = require("express");
const userController = require("../controller/UserController");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id", userController.getUser);

module.exports = router;
