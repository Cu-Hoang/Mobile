const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderDetailSchema = new mongoose.Schema(
  {
    orderId: [{ type: Schema.Types.ObjectId, ref: "Order", required: true }],
    productId: [
      { type: Schema.Types.ObjectId, ref: "Product", required: true },
    ],
    quantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("OrderDetail", orderDetailSchema);
