const userDao = require("./dao");
module.exports = {
  async getUsers(page, limit) {
    return userDao.getUsers(page, limit);
  },
  async getUser(id) {
    return userDao.getUser(id);
  },
  async createUser(user) {
    return userDao.createUser(user);
  },
  async loginUser(user) {
    return userDao.loginUser(user);
  },
};
