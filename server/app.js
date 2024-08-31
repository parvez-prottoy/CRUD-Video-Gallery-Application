const express = require("express");
const app = express();
const baseRoute = require("./src/routes/base.route");
const videoRoute = require("./src/routes/videos.route");
const { notFoundHandler, errorHandler } = require("./src/utils/error");

// ? connect DB
const connectDB = require("./config/db").apply();
// ? use middleware
const morgan = require("morgan");
const cors = require("cors");
app.use([
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
]);
// ? routes
app.use("/", baseRoute);
app.use("/api/v1/videos", videoRoute);
// ? error handler
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
