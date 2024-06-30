const router = require('express').Router();
const orderDetailController = require('../controller/OrderDetailController')

router.post('/create',orderDetailController.create);
module.exports = router;