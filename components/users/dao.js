const UserSchema = require("../../services/db/UserSchema");
module.exports = {
  async getUsers(page, limit) {
    return new Promise((resolve, reject) =>
      UserSchema.find({}).skip((page-1)*limit).limit(limit).exec((err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      })
    );
  },
  async getUser(id) {
    return new Promise((resolve, reject) =>
      UserSchema.findOne({ _id: id }, (err, docs) => {
        if (err) reject(err);
        return resolve(docs);
      })
    );
  },
  async createUser(user) {
    return new Promise((resolve, reject) => {
      const newUser = new UserSchema(user);
      newUser.save((err, docs) => {
        if (err) reject(err);
        return resolve(docs);
      });
    });
  },
};
