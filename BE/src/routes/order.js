const router = require('express').Router();
const orderController = require('../controller/OrderController')

router.post('/create',orderController.create);
router.patch('/update/:id',orderController.update);
module.exports = router;