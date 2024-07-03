const Favorite = require('../model/Favorite');
const Product = require('../model/Product');
const createError = require("http-errors");

// exports.addFavorite = async (req, res, next) => {
//   try {
//     const { userId, productId } = req.body;
//     const product = await Product.findById(productId);
//     if (!product) throw createError.NotFound('Product not found');

//     const existingFavorite = await Favorite.findOne({ userId, productId });
//     if (existingFavorite) return res.status(400).json({ message: 'Item already in favorites' });

//     const newFavorite = new Favorite({ userId, productId });
//     await newFavorite.save();
//     res.status(201).json({ message: 'Favorite added successfully', favorite: newFavorite });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.removeFavorite = async (req, res, next) => {
//   try {
//     const { userId, productId } = req.body;
//     const favorite = await Favorite.findOneAndDelete({ userId, productId });
//     if (!favorite) return res.status(404).json({ message: 'Item not found in favorites' });

//     res.status(200).json({ message: 'Favorite removed successfully' });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.getFavorites = async (req, res, next) => {
//   try {
//     const { userId } = req.params;
//     const favorites = await Favorite.find({ userId }).populate('productId');
//     res.status(200).json(favorites);
//   } catch (error) {
//     next(error);
//   }
// };

// const favoriteController = {
//   addFavorite: async (req, res, next) => {
//     try {
//       const { userId, productId } = req.body;
//       const existingFavorite = await Favorite.findOne({ userId, productId });
//       if (existingFavorite) return res.status(400).json({ message: 'Product already in favorites' });

//       const newFavorite = new Favorite({ userId, productId });
//       const result = await newFavorite.save();
//       if (!result) return res.status(500).json({ message: 'Error adding to favorites' });

//       return res.status(201).json({ message: 'Product added to favorites successfully', data: result });
//     } catch (error) {
//       next(error);
//     }
//   },

//   getFavorites: async (req, res, next) => {
//     try {
//       const { userId } = req.params;
//       const favorites = await Favorite.find({ userId }).populate('productId');
//       if (!favorites) return res.status(404).json({ message: 'No favorites found' });

//       return res.status(200).json({ message: 'Favorites retrieved successfully', data: favorites });
//     } catch (error) {
//       next(error);
//     }
//   },

//   removeFavorite: async (req, res, next) => {
//     try {
//       const { userId, productId } = req.body;
//       const result = await Favorite.findOneAndDelete({ userId, productId });
//       if (!result) return res.status(404).json({ message: 'Favorite not found' });

//       return res.status(200).json({ message: 'Product removed from favorites successfully', data: result });
//     } catch (error) {
//       next(error);
//     }
//   },
// };

// module.exports = favoriteController;

const favoriteController = {
  addFavorite: async (req, res, next) => {
    try {
      const { userId, productId } = req.body;

      // Kiểm tra xem productId có hợp lệ không
      const product = await Product.findById(productId);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        console.log('LOG Sau khi response');
        console.log('Response after adding to favorite: Product not found');
        return;
      }

      // Kiểm tra xem sản phẩm đã có trong danh sách yêu thích chưa
      const existingFavorite = await Favorite.findOne({ userId, productId });
      if (existingFavorite) {
        res.status(400).json({ message: 'Product already in favorites' });
        console.log('LOG Sau khi response');
        console.log('Response after adding to favorite: Product already in favorites');
        return;
      }

      // Thêm sản phẩm vào danh sách yêu thích
      const newFavorite = new Favorite({ userId, productId });
      const result = await newFavorite.save();
      if (!result) {
        res.status(500).json({ message: 'Error adding to favorites' });
        console.log('LOG Sau khi response');
        console.log('Response after adding to favorite: Error adding to favorites');
        return;
      }

      res.status(201).json({ message: 'Product added to favorites successfully', data: result });
      console.log('LOG Sau khi response');
      console.log('Response after adding to favorite: Product added to favorites successfully');
    } catch (error) {
      console.error('Error in addFavorite:', error);
      next(error);
    }
  },

  getFavorites: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const favorites = await Favorite.find({ userId }).populate('productId');
      if (!favorites) {
        res.status(404).json({ message: 'No favorites found' });
        console.log('LOG Sau khi response');
        console.log('Response after fetching favorites: No favorites found');
        return;
      }

      res.status(200).json({ message: 'Favorites retrieved successfully', data: favorites });
      console.log('LOG Sau khi response');
      console.log('Response after fetching favorites: Favorites retrieved successfully');
    } catch (error) {
      console.error('Error in getFavorites:', error);
      next(error);
    }
  },

  removeFavorite: async (req, res, next) => {
    try {
      const { userId, productId } = req.body;
      const result = await Favorite.findOneAndDelete({ userId, productId });
      if (!result) {
        res.status(404).json({ message: 'Favorite not found' });
        console.log('LOG Sau khi response');
        console.log('Response after removing favorite: Favorite not found');
        return;
      }

      res.status(200).json({ message: 'Product removed from favorites successfully', data: result });
      console.log('LOG Sau khi response');
      console.log('Response after removing favorite: Product removed from favorites successfully');
    } catch (error) {
      console.error('Error in removeFavorite:', error);
      next(error);
    }
  },
};

module.exports = favoriteController;