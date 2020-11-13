module.exports = {
  development: {
    Server: {
      PORT: process.env.PORT,
      dbConfig: {
        DB_URI: process.env.DB_URI,
      },
    },
  },
  production: {
    Server: {
      PORT: process.env.PORT,
      dbConfig: {
        DB_URI: process.env.DB_URI,
      },
    },
  },
};
