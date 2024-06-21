const auth = require("./auth");
const mail = require('./mail')
const product = require('./product')
const upload = require('./upload')

const initRoutes = (app) => {
  app.use('/api/v1/mail',mail)
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/product",product)
  app.use("/api/v1/upload",upload)
  app.use("/", (req, res) => res.send("SERVER ON"));
};
module.exports = initRoutes;