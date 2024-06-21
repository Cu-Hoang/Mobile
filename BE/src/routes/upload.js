const router = require('express').Router();
const upload = require('../controller/UploadController')
const multer = require('../middleware/multer');

router.post('/',multer.single('image'),upload.upload);

module.exports = router;