const express = require("express");
const app = express();
const cors = require("cors");

const indexController = require("./controllers/index");
const quotesController = require("./controllers/quotes");

app.use(cors());

app.use("/", indexController);
app.use("/quotes", quotesController);

module.exports = app;
