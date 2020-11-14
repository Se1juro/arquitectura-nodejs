const SessionSchema = require("../../services/db/SessionsSchema");
module.exports = {
  async getSession(id) {
    return new Promise((resolve, reject) => {
      SessionSchema.findOne({ _id: id }).exec((err, doc) => {
        if (err) return reject(err);
        return resolve(doc);
      });
    });
  },
};
