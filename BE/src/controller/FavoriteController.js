const Favorite = require('../model/Favorite');
const Product = require('../model/Product'); // Import Product model
const createError = require("http-errors");

exports.addFavorite = async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    const product = await Product.findById(productId);
    if (!product) throw createError.NotFound('Product not found');

    const existingFavorite = await Favorite.findOne({ userId, productId });
    if (existingFavorite) return res.status(400).json({ message: 'Item already in favorites' });

    const newFavorite = new Favorite({ userId, productId });
    await newFavorite.save();
    res.status(201).json({ message: 'Favorite added successfully', favorite: newFavorite });
  } catch (error) {
    next(error);
  }
};

exports.removeFavorite = async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    const favorite = await Favorite.findOneAndDelete({ userId, productId });
    if (!favorite) return res.status(404).json({ message: 'Item not found in favorites' });

    res.status(200).json({ message: 'Favorite removed successfully' });
  } catch (error) {
    next(error);
  }
};

exports.getFavorites = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const favorites = await Favorite.find({ userId }).populate('productId');
    res.status(200).json(favorites);
  } catch (error) {
    next(error);
  }
};
