const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ username: user.name, id: user._id, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  // find user
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  // compare password

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError(
      "Invalid Credentials: Password is not matching"
    );
  }

  // create token
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user: user.name, id: user._id, token });
};

const deleteAll = async (req, res) => {
  await User.remove({});
  res.send("delelte all");
};

module.exports = {
  register,
  login,
  deleteAll,
};
