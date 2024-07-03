const mongoose = require("mongoose");
const { Schema } = mongoose;
const favoriteSchema = new mongoose.Schema(
  { userId: [{ type: Schema.Types.ObjectId, ref: "User", required: true }], },
  { timestamps: true }
);
module.exports = mongoose.model("Favorite", favoriteSchema);
