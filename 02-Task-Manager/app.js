const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const taskRouter = require("./routes/task");
const port = process.env.PORT || 3000;
require('dotenv').config();
const notFound = require('./middleware/notFound')
const errorHandlerMiddlerware = require('./middleware/error-handler')
//middelware
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", taskRouter);
app.use(notFound)
app.use(errorHandlerMiddlerware)


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port);
    console.log(`Connect to DB ...`);
  } catch (error) {
    console.log(error);
  }
};

start();
