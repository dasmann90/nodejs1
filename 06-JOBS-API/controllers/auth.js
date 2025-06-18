const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ username: user.name, id: user._id, token });
};

const login = async (req, res) => {
  res.send("login API");
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
