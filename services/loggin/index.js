module.exports.createSessionUser = (req, res, data) => {
  req.session.data = data;
};
module.exports.destroySession = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return res.sendStatus(400);
    }
  });
};
