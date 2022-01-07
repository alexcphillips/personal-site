const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const staticImages = require("path").join(__dirname, "../build");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(staticImages));
app.use(routes);

module.exports = { app };
