const express = require('express');
const router = express.Router();
const favoriteController = require('../controller/FavoriteController');

router.post('/', favoriteController.addFavorite);
router.delete('/', favoriteController.removeFavorite);
router.get('/:userId', favoriteController.getFavorites);

module.exports = router;
