const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connect = async () => {
  try {
    const dbUri = `${process.env.MONGODB_URL}`;
    await mongoose
      .connect(dbUri)
      .then(() => console.log("Connected successfully"));
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
};

connect();