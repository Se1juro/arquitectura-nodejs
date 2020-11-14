const { session } = require("passport");
const { getSession } = require("./dao");
const sessionDao = require("./dao");
module.exports = {
  async getSession(id) {
    return sessionDao.getSession(id);
  },
};
