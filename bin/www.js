let app = require("../app");
let { createServer } = require("http");
const config = require("config");
let port = config.get(process.env.NODE_ENV+".Server.PORT");

let server = createServer(app);

server.listen(port, () => {
  console.log("Server on Port", port);
});
