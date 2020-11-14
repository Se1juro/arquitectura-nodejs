const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { destroySession } = require("../../services/loggin");
const {
  validatePostUser,
  validateExistsUser,
  authLoginWithPassport,
  validateSessionUser,
} = require("../../middlewares/validateUsers");
router.get("/", validateSessionUser, controller.getUsers);
router.get("/:id", controller.getUser);
router.post("/", validatePostUser, validateExistsUser, controller.createUser);
router.post("/login", authLoginWithPassport, controller.loginUser);
router.post("/logout", destroySession);
module.exports = router;
