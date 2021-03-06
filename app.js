require("dotenv").config();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
const { error404Handler, errorHandler } = require("./middlewares");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("passport");
require("./database/index");
require("./services/passport/authLogin");

app.use(
  session({
    secret: process.env.SECRETTOKEN,
    saveUninitialized: false,
    resave: true,
    name: process.env.SECRETTOKEN,
    cookie: {
      httpOnly: true,
      secure: false, //Cambiar en producción
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 2 * 24 * 60 * 60, //Duracion de la cookie
      secret: process.env.SECRETTOKEN,
    }),
  })
);
app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan(process.env.LOGGER));
app.use(cors());
app.use(cookieParser());
app.use("/api", routes);
app.use(error404Handler);
app.use(errorHandler);

app.disable("x-powered-by");
module.exports = app;
