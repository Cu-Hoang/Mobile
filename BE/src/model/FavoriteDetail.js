const mongoose = require("mongoose");
const { Schema } = mongoose;
const favoriteDetailSchema = new mongoose.Schema(
  {
    favoriteId: [{ type: Schema.Types.ObjectId, ref: "Favorite", required: true }],
    productId: [{ type: Schema.Types.ObjectId, ref: "Product", required: true },],
  },
  { timestamps: true }
);
module.exports = mongoose.model("FavoriteDetail", favoriteDetailSchema);
