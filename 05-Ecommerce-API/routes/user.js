const router = require("express").Router();
const UserSchema = require("../models/User");
const {
  verifyUserTokenAndAuthorize,
  verifyUserIsAdmin,
} = require("../middleware/varifyToken");
const JWT = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

// pending - aggregate

// GET USER STATS
router.get("/stats", verifyUserIsAdmin, async (req, res) => {
  let date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear));

  try {
    const date = await UserSchema.aggregate([
      { $match: { admin: true } },
     
      {
        $group: {
          _id:"$username",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
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
    const { password, ...user } = updateUser._doc;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", verifyUserIsAdmin, async (req, res) => {
  try {
    const user = await UserSchema.findById(req.params.id, { password: 0 });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", verifyUserIsAdmin, async (req, res) => {
  if (req.user.id !== req.params.id) {
    try {
      await UserSchema.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted !!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(400).json("You can not delete your ID..");
  }
});

router.get("/", verifyUserIsAdmin, async (req, res) => {
  try {
    // ignore the password filed form list
    const users = await UserSchema.find({}, { password: 0 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
