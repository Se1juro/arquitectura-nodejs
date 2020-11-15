const { findUserByEmailAndExists } = require("../components/users/dao");
const passport = require("passport");
module.exports.validatePostUser = (req, res, next) => {
  if (!req.body.username) return res.sendStatus(400);
  if (!req.body.email) return res.sendStatus(400);
  if (!req.body.password) return res.sendStatus(400);
  next();
};
module.exports.validateExistsUser = (req, res, next) => {
  if (findUserByEmailAndExists(req.body.email)) return res.sendStatus(400);
  next();
};
module.exports.authLoginWithPassport = (req, res, next) => {
  passport.authenticate("login", (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.sendStatus(400);
    }
    if (user) {
      next();
    }
  })(req, res, next);
};
module.exports.validateSessionUser = async (req, res, next) => {
  if (!req.session.data) {
    return res.status(401).json({
      status: "Error",
      message: "Unauthorized",
    });
  }
  next();
};
