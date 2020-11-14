const sessionModel = require("./model");

module.exports = {
  async getSession(id) {
    return await sessionModel.getSession(id);
  },
};
