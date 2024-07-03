// const mongoose = require('mongoose');

// const favoriteSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product',
//     required: true,
//   },
// });

// const Favorite = mongoose.model('Favorite', favoriteSchema);

// module.exports = Favorite;

const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;