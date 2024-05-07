const mongoose = require("mongoose");
const { isEmail } = require("validator");
const genders = ["male", "female"];
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
      unique: true,
      validate: {
        validator: isEmail,
        message: "{VALUE} không phải là một địa chỉ email hợp lệ.",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      enum: genders,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
