module.exports = {
  server: {
    port: 5000,
  },
  //Base de datos
  mongodb: {
    dbUri: "mongodb://localhost:27017/PruebaArquitectura",
  },
  logger: ":method :url :status :res[content-length] - :response-time ms",
};
