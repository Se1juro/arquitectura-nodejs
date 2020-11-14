const express = require("express");
const users = require("../components/users/routes");
const sessionDao = require("../components/Sessions/dao");
const router = express.Router();
router.get("/login", (req, res) => {
  data = {
    nombre: "daniel",
  };
  req.session.data = data;
  res.send(req.session);
});
router.get("/prueba", (req, res) => {
  console.log(req.session.id);
});
router.get("/cookie", (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    res.status(200).json({
      contador: req.session.contador,
      session: req.sessionID,
      data: req.session.data,
    });
  } else {
    req.session.contador = 1;
    res.status(200).json(req.session.contador);
  }
});
router.use("/users", users);

module.exports = router;
