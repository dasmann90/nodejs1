const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors/");

const auth = async (req, res, next) => {
  //check headers
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  // collect the token
  const token = authHeader.split(" ")[1];
  //console.log(token);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, username: payload.username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

module.exports = auth;
