const bcrypt = require("bcryptjs");
const BCRYPT_SALT_ROUNDS = 12;
module.exports.encryptData = async (data) => {
  return await bcrypt.hash(data, BCRYPT_SALT_ROUNDS);
};
module.exports.compareEncryptData = async (passwordBody, passwordUser) => {
  return await bcrypt.compare(passwordBody, passwordUser);
};
