module.exports = {
  server: {
    port: 4044,
    domain: "localhost",
  },
  //Base de datos
  mongodb: {
    dbUri: "mongodb://localhost:27017/PruebaArquitectura",
  },
  redis: {},
  //configuracion de email
  email: {
    user: "xx@xx.com",
    password: "xxxx",
  },
  logger: "dev",
};
