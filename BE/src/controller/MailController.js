const { emailValidate, otpValidate } = require("../helpers/validation");
const createError = require("http-errors");
const User = require("../model/User");
const nodemailer = require("nodemailer");
const client = require("../config/connection_redis");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});
function getRandomFourDigitNumber() {
  let randomNum = Math.floor(Math.random() * 10000);
  let randomFourDigit = randomNum.toString().padStart(4, "0");
  return randomFourDigit;
}

const mailController = {
  send_opt_forgot_password: async (req, res, next) => {
    try {
      const { error } = emailValidate(req.body);
      if (error) throw createError(error.details[0].message);
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) throw createError.NotFound("User is not registered");
      const userId = user._id.toString();
      const otp = getRandomFourDigitNumber();
      client.set(userId + "otp", otp, "EX", 2 * 60, (err, reply) => {
        if (err) return next(createError.InternalServerError());
      });
      const info = await transporter.sendMail(
        {
          from: '"The Coffee Shop C22👻" <maddison53@ethereal.email>', // sender address
          to: email, // list of receivers
          subject: "Cài đặt lại mật khẩu", // Subject line // plain text body
          html: `<b>OTP: ${otp}</b></br><p>Mã này sẽ hết hạn trong 2 phút</p>`, // html body
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
            return res.json({
              info,
              userId: userId,
              status: "success",
              msg: "Send otp successfully, please check your email"
            });
          }
        }
      );
    } catch (error) {
      next(error);
    }
  },
  verify_otp: async (req, res, next) => {
    try {
      const { error } = otpValidate(req.body);
      if (error) {
        throw createError(error.details[0].message);
      }
      const { userId, otp } = req.body;
      const userIdOtp = userId + "otp";
      await client.get(userIdOtp, (err, reply) => {
        if (otp === reply)
          return res.json({
            status: "success",
            msg: "Verify successfully",
          });
        else {
          return res.json({
            status: "error",
            msg: "Internal server error",
          });
        }
      });
    } catch (error) {
      next(error);
    }
  },
};
module.exports = mailController;
