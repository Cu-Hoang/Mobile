const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new mongoose.Schema(
  {
    userId: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    total: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "pending",
    },
    paymentmethod: {
      type: String,
      default: "",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
