require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db");
const port = process.env.PORT || 3200;
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product")

//middleware
app.use(express.json());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/product", productRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App is runing port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
