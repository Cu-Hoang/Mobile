const authController = require("../controller/AuthController");
const { getMaxListeners } = require("../model/User");
const router = require("express").Router();
const authMiddleware = require('../middleware/AuthMiddleware')

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh-token", authController.refreshToken);
router.delete("/logout",authController.logout)
router.post("/update_password",authController.update_password)
// test jwt
router.get("/getlist", authMiddleware.verifyAccesstoken,(req, res, next) => {
    console.log(req.headers);
  const listUsers = [
    {
      email: "abc@gmail.com",
    },
    {
      email: "xyz@gmail.com",
    },
  ];
  res.json({
    status: 'success',
    listUsers
  })
});
module.exports = router;
