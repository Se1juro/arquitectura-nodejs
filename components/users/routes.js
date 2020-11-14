const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { validatePostUser } = require("../../middlewares/validateUsers");
router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);
router.post("/", validatePostUser, controller.createUser);
router.post("/login", controller.loginUser);
module.exports = router;
