const router = require('express').Router();
const favoriteDetailController = require('../controller/FavoriteDetailController')

router.post('/create',favoriteDetailController.create);
module.exports = router;