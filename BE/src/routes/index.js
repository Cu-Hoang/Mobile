const auth = require("./auth");
const mail = require("./mail");
const product = require("./product");
const order = require("./order");
const orderdetail = require("./orderdetail");
const payment = require("./payment");
const upload = require("./upload");
const user = require("./user");
const wishlistRoutes = require('./wishlist');

const initRoutes = (app) => {
  app.use("/api/v1/mail", mail);
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/product", product);
  app.use("/api/v1/upload", upload);
  app.use("/api/v1/order", order);
  app.use("/api/v1/orderdetail", orderdetail);
  app.use("/api/v1/payment",payment)
  app.use('/api/v1/wishlist', wishlistRoutes);
  app.use("/api/v1/user", user);

  app.use("/", (req, res) => res.send("SERVER ON"));
};
module.exports = initRoutes;
