const controller = require("./controller/controller.js");
const express = require("express");
const db = require("./models");
const app = express();
const bodyParser = require("body-parser");
const apiRouter = require("./routes/index");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

module.exports = app;