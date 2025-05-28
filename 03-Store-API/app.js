require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFoundTempalte = require("./middlerware/notFound");
const errorHandlerMiddleWare = require("./middlerware/errorHandler");
const accessControl = require('./middlerware/accessControl');

const productRoute = require("./routes/productRoute");
// config variables
const port = process.env.PORT || 3000;

// config middleware
app.use(express.json());
app.use(accessControl)


// routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use("/api/v1/products", productRoute);

app.use(notFoundTempalte);
app.use(errorHandlerMiddleWare);
// connect to DB and start the app
start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`DB connected and app is runing on the port ${port} ....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
