const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const createError = require('http-errors')
const port = process.env.PORT || 5000;
const initRoutes = require("./routes/index");
require("./config/connection_mongodb");
require('./config/connection_redis')
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');
const favoriteRoutes = require('./routes/FavoriteRoutes');
const userRoutes = require('./routes/UserRoutes')

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
app.use('/api/products', productRoutes);
app.use('/api/favorites', favoriteRoutes);

initRoutes(app);
app.use((req,res,next)=>{
  next(createError.NotFound('This route does not exist'));
})
app.use((err,req,res,next)=>{
  res.json({
    status:err.status || 500,
    msg: err.message
  })
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
                
app.use("/api/users", userRoutes);
