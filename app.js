require("dotenv").config();
require('./database/index')
const morgan = require("morgan");
const express = require("express");
const app = express();
app.use(morgan("dev"));
const cors = require("cors");
const routes = require("./routes/routes");
app.use(cors());
app.use(express.json({ limit: '10mb', extended: true }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/api", routes);
app.disable("x-powered-by");
module.exports = app;
