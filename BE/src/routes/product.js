const router = require('express').Router();
const productController = require('../controller/ProductController')

router.post('/create',productController.create);
router.get('/getProduct/:id',productController.getProduct);
router.get('/getProducts',productController.getProducts);
router.patch('/update/:id',productController.update);
router.delete('/delete/:id',productController.delete);
module.exports = router;