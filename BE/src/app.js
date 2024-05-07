const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;
const initRoutes = require("./routes/index");
require("./config/db");

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extends: true }));


initRoutes(app);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
