module.exports = {
    server: {
      port: 5000,
    },
    //Base de datos
    mongodb: {
      PORT: 27017,
      host: "localhost",
      user: "X",
      password: "Y",
    },
    logger: ":method :url :status :res[content-length] - :response-time ms",
  };
  