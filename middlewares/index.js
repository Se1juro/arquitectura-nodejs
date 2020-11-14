const createError = require("http-errors");

module.exports.error404Handler = (req, res, next) => {
  next(createError(404, "Not Found"));
};

module.exports.errorHandler = function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
};
