const auth = require("./auth");

const initRoutes = (app) => {
  app.use("/api/v1/auth", auth);
  app.use("/", (req, res) => res.send("SERVER ON"));
};
module.exports = initRoutes;