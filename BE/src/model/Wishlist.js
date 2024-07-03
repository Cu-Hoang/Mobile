// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const WishlistSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
// }, { timestamps: true });

// module.exports = mongoose.model('Wishlist', WishlistSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishlistSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        addedAt: { type: Date, default: Date.now }
      }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wishlist", wishlistSchema);

