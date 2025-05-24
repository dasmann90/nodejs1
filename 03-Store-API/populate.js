require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/productModel");

const productJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // delete first
    await Product.deleteMany();
    //insert
    await Product.create(productJson);
    console.log("Connected");
    //exit
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
