const joi = require("joi");

const userValidate = (data) => {
  const userSchema = joi.object({
    email: joi.string().email().lowercase().label("Email").required(),
    password: joi.string().min(6).max(32).label("Password").required(),
  });
  return userSchema.validate(data);
};
const emailValidate = (data) => {
  const email = joi.object({
    email: joi.string().email().lowercase().label("Email").required(),
  });
  return email.validate(data);
};
const otpValidate = (data) => {
  const otp = joi.object({
    userId: joi.string().required(),
    otp: joi.string().length(4).label("OTP").required(),
  });
  return otp.validate(data);
};
const confirmPassword = (data) => {
  const confirm = joi.object({
    userId: joi.string().required(),
    password: joi.string().min(6).max(32).required().label("Password"),
    password_confirmation: joi
      .any()
      .valid(joi.ref("password"))
      .required()
      .label("Confirm password")
      .options({ messages: { "any.only": "{{#label}} does not match" } }),
  });
  return confirm.validate(data);
};
const productValidate = (data) =>{
  const productSchema = joi.object({
    name: joi.string().required()
  });
  return productSchema.validate(data);
}
module.exports = {
  userValidate,
  emailValidate,
  otpValidate,
  confirmPassword,
  productValidate
};
