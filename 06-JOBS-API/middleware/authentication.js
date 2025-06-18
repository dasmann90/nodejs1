const jwt = require("jsonwebtoken");
const {UnauthorizedAPIError} = require("../errors");

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedAPIError(`No token provided`);
  }
  const token = authHeader.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decode;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthorizedAPIError(`Not authorize to access this route`);
  }
};

module.exports = authMiddleWare;