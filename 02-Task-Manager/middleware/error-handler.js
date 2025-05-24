const {CustomApiError} = require("../error/custom-error");

const errorHandlerMiddlerware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: `Somthing went worng !` });
};

module.exports = errorHandlerMiddlerware;
