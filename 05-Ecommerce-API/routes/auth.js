const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SEC_MSG
    ).toString(),
  });

  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Worng Credentials !");

    const deycrptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SEC_MSG
    ).toString(CryptoJS.enc.Utf8);

    deycrptedPassword !== req.body.password &&
      res.status(401).json("Worng Credentials !");
    const { password, ...other } = user._doc;

    // SET JWT
    const accessToken = JWT.sign(
      {
        id: user._id,
        admin: user.admin,
        username:user.username
      },
      process.env.SEC_JWT,
      { expiresIn: "1d" }
    );

    res.status(200).json({...other,accessToken});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
