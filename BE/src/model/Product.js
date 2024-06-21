const { boolean } = require("joi");
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    offer: {
      type: Number,
      default: 0,
    },
    promo: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
