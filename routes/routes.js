const express = require("express");
const users = require("../components/users/routes");
const router = express.Router();
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
  res.status(200).send(`Hola has visto esta página ${req.session.cuenta}`);
});
router.use("/users", users);

module.exports = router;
