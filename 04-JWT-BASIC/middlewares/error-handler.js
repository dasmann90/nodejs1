const errorHandlerMiddleWare = (err, req, res, next) => {
  res.status(500).json({ msg: `Somthing went worng !` });
};

module.exports = errorHandlerMiddleWare;
