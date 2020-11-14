const express = require("express");
const users = require("../components/users/routes");
const router = express.Router();
router.get("/", (req, res, next) => {
  req.session.data = {
    nombre:'Daniel',
    rol:'Admin',
    id:'12234SA234dsf_d23',
    email:'daniel@gmail.com'
  }
  res.status(200).json(req.session.data);
});
router.get("/logout", (req, res, next) => {
  req.session.destroy((err)=>{
    if (err) console.log(err)
  })
});
router.use("/users", users);

module.exports = router;
