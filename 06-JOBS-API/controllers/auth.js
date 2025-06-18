const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = jwt.sign({userId:user._id,username:user.name},process.env.JWT_SECRET,{expiresIn:'30d'})

  res.status(StatusCodes.CREATED).json({username:user.name,id:user._id,token});
};

const login = async (req, res) => {
  res.send("login API");
};

const deleteAll = async(req,res)=>{
  await User.remove({});
  res.send('delelte all')
}

module.exports = {
  register,
  login,
  deleteAll
};
