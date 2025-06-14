const jwt = require("jsonwebtoken");
const {BadRequestAPIError} = require("../errors");

const logIn = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestAPIError("Please provide username and password.");
  }
  // created demo id
  const id = new Date().getDate();

  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

  res.status(200).json({ msg: `user is created`, token });
};

const dashBoard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello ${req.user.username}`,
      secret: `Here is your authorize data, ${luckyNumber}`,
    });
};

module.exports = { logIn, dashBoard };
