module.exports.validatePostUser = (req, res, next) => {
  if (!req.body.username) return res.sendStatus(400);
  if (!req.body.email) return res.sendStatus(400);
  if (!req.body.password) return res.sendStatus(400);
  next();
};
