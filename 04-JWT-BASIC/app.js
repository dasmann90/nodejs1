require("dotenv").config();
require("express-async-errors");
const express = require("express");
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleWare = require("./middlewares/error-handler");
const mainRouter = require("./routes/main-router");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1", mainRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleWare);

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`App is running at port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
