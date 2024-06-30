// // src/model/favorite.js
// const mongoose = require('mongoose');

// const favoriteSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'User', // Giả sử bạn có mô hình User
//   },
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'Product',
//   },
// });

// module.exports = mongoose.model('Favorite', favoriteSchema);

// src/model/user.js
const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

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

// Middleware để mã hóa mật khẩu trước khi lưu
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Phương thức xác thực mật khẩu
userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

module.exports = mongoose.model("User", userSchema);
