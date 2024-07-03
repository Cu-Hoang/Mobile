const router = require('express').Router();
const wishlistController = require('../controller/WishlistController');

router.post('/add', wishlistController.add);
router.delete('/remove/:productId', wishlistController.remove);
router.get('/user/:userId', wishlistController.getUserWishlist);

module.exports = router;
