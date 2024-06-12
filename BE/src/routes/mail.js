const router = require('express').Router();
const mailController = require('../controller/MailController')

router.post('/send-otp-forgot-password',mailController.send_opt_forgot_password);
router.post('/verify-otp',mailController.verify_otp);
module.exports = router;