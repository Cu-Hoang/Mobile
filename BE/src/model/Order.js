const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new mongoose.Schema(
  {
    userId: [{ type: Schema.Types.ObjectId, ref: "User",  required: true }],
    total: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "unpaid",
    },
    type: {
      type: String,
      default: "COD",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
