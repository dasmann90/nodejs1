const router = require("express").Router();
const UserSchema = require("../models/User");
const { verifyUserTokenAndAuthorize,verifyUserIsAdmin } = require("../middleware/varifyToken");
const JWT = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

router.get("/",verifyUserIsAdmin, async (req, res) => {
  try {
    // ignore the password filed form list
    const users = await UserSchema.find({},{password:0});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", verifyUserTokenAndAuthorize, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SEC_MSG
    ).toString();
  }
  try {
    const updateUser = await UserSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    const {password,...user} = updateUser._doc
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
