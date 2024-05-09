// const mongoose = require("mongoose");
// require("dotenv").config();

// const conn = mongoose.createConnection(`${process.env.MONGODB_URL}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// conn.on("connected", () => {
//   console.log(`Mongodb::: connected:::${conn.name}`);
// });
// conn.on("disconnected", () => {
//   console.log(`Mongodb::: disconnected:::${conn.name}`);
//   console.log("Disconnected event listener called");
// });
// conn.on("error", (error) => {
//   console.log(`Mongodb::: error:::${JSON.stringify(error)}`);
// });
// process.on("SIGINT", async () => {
//   await conn.destroy(); // or mongoose.disconnect()
//   setTimeout(() => {
//     process.exit(0);
//   }, 100);
// });
// module.exports = conn;

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
