const express = require("express");
const app = express();
const cors = require("cors");

const indexRoute = require("./routes/index");
const quotesRoute = require("./routes/quotes");

app.use(cors());

app.use("/", indexRoute);
app.use("/quotes", quotesRoute);

module.exports = app;
