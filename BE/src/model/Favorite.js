// const mongoose = require('mongoose');

// const favoriteSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'User', // Assuming you have a User model
//   },
//   menuItemId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'Menu',
//   },
// });

// module.exports = mongoose.model('Favorite', favoriteSchema);

const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  menuItemId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
