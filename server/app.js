const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const app = express();

// var corsOpts = {
//   origin: "*",
//   credentials: true
// }; // if uncommenting, be sure to pass these opts to cors in below middleware

// app.use((req, res, next) => {
//   console.log("Handled request URL:", req.url);
//   next();
// });

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../build")));
app.use(routes);
// app.use((req, res, next) => {
//   console.log("Unhandled request URL:", req.url);
//   next();
// });

module.exports = { app };
