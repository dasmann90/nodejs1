const JWT = require("jsonwebtoken");

const verifyUserToken = (req, res, next) => {
  const authHearder = req.headers.token;
  if (authHearder) {
    const token = authHearder.split(" ")[1];
    JWT.verify(token, process.env.SEC_JWT, (err, user) => {
      if (err) {
        res.status(403).json("Token has been expired !");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("You are not authenticated !");
  }
};

const verifyUserTokenAndAuthorize = (req, res, next) => {
  verifyUserToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.admin) {
      next();
    } else {
      res.status(403).json("You are not allow to do this !!");
    }
  });
};

const verifyUserIsAdmin = (req, res, next) => {
  verifyUserToken(req, res, () => {
    if (req.user.admin) {
      next();
    } else {
      res.status(403).json("You are not allow to do this !!");
    }
  });
};

module.exports = { verifyUserToken, verifyUserTokenAndAuthorize,verifyUserIsAdmin };
