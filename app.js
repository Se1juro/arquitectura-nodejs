require("dotenv").config();
require("./database/index");
const morgan = require("morgan");
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
const { error404Handler, errorHandler } = require("./middlewares");
app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/api", routes);
app.use(error404Handler);
app.use(errorHandler);

app.disable("x-powered-by");
module.exports = app;
