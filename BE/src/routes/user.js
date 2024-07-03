const router = require('express').Router();
const userController = require('../controller/UserController')

router.get('/getUser/:id',userController.getUser);
module.exports = router;