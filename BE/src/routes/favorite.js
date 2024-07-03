const router = require('express').Router();
const favoriteController = require('../controller/FavoriteController')

console.log(favoriteController);

router.post('/create',favoriteController.create);
router.patch('/update/:id',favoriteController.update);
module.exports = router;