const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const taskRouter = require("./routes/task");
const port = 3000;
require('dotenv').config();
//middelware
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", taskRouter);



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
