const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../build")));
app.use(routes);

module.exports = { app };
