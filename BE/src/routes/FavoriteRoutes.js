// const express = require('express');
// const router = express.Router();
// const Favorite = require('../model/Favorite'); // Đảm bảo đường dẫn này là chính xác

// router.post('/favorites', async (req, res) => {
//   const { userId, productId } = req.body;
  
//   try {
//     const favorite = new Favorite({ userId, productId });
//     await favorite.save();
//     res.status(201).send({ status: 'success', data: favorite });
//   } catch (error) {
//     res.status(400).send({ status: 'error', message: error.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Favorite = require('../model/Favorite'); // Đảm bảo rằng bạn có model Favorite

// Route để thêm sản phẩm vào danh sách yêu thích
router.post('/', async (req, res) => {
  console.log('Request body:', req.body); // Thêm Log để kiểm tra request
  const { productId, userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    // Thêm Log để kiểm tra dữ liệu trước khi thêm vào wishlist
    console.log('Adding to favorite:', { productId, userId });

    // Giả sử bạn có hàm addToWishlist để thêm sản phẩm vào wishlist
    const result = await addToWishlist(productId, userId);

    // Thêm Log để kiểm tra kết quả sau khi thêm vào wishlist
    console.log('Response after adding to favorite:', result);

    res.status(200).json({ message: 'Added to wishlist successfully' });
  } catch (error) {
    console.error('Error adding to favorite:', error);
    res.status(500).json({ error: 'SERVER ERROR' });
  }
});

module.exports = router;
