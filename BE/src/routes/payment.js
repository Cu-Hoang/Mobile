const router = require('express').Router();
const paymentController = require('../controller/PaymentController')

router.post('/momo',paymentController.momo);
router.post('/notification',paymentController.notification);

module.exports = router;