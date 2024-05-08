const mongoose = require("mongoose");
require("dotenv").config();

const conn = mongoose.createConnection(`${process.env.MONGODB_URL}`);

conn.on("connected", () => {
  console.log(`Mongodb::: connected:::${conn.name}`);
});
conn.on("disconnected", () => {
  console.log(`Mongodb::: disconnected:::${conn.name}`);
  console.log("Disconnected event listener called"); 
});
conn.on("error", (error) => {
  console.log(`Mongodb::: error:::${JSON.stringify(error)}`);
});
process.on("SIGINT", async () => {
  await conn.destroy(); // or mongoose.disconnect()
  setTimeout(() => {
    process.exit(0);
  }, 100);
});
module.exports = conn;
