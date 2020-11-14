const userModel = require("./model");
const userDto = require("./dto");
const { encryptData } = require("../../services/encryptData/");
const { createSessionUser } = require("../../services/loggin/");

module.exports = {
  async getUsers(req, res) {
    const page = parseInt((req.query.page || 1).toString(), 10);
    const limit = parseInt((req.query.limit || 10).toString(), 10);
    const users = await userModel.getUsers(page, limit);
    return res.status(200).json(userDto.multiple(users, req.user));
  },
  async getUser(req, res) {
    const user = await userModel.getUser(req.params.id);
    if (!user) return res.sendStatus(404);
    return res.status(200).json(userDto.single(user, req.user));
  },
  async createUser(req, res) {
    const password = await encryptData(req.body.password);
    const user = await userModel.createUser({
      username: req.body.username,
      email: req.body.email,
      password: password,
    });
    return res.status(200).json(userDto.single(user, req.user));
  },
  async loginUser(req, res) {
    const user = await userModel.loginUser(req.body.email);
    const returnUser = userDto.single(user);
    createSessionUser(req, res, returnUser);
    console.log(req.session.id);
    return res.status(200).json(returnUser);
  },
};
