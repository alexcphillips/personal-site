const mongo = require("./mongo");
const { app } = require("./app");
const path = require("path");

envPath =
  process.env.NODE_ENV === "dev" ? "../.env.dev" : (envPath = "../.env");
require("dotenv").config({ path: path.join(__dirname, envPath) });

(async () => {
  await mongo.mongoConnect(process.env.MONGO_URI);

  app.listen(process.env.PORT, () => {
    console.log("Server started SUCCESSFULLY on port", process.env.PORT);
  });
})();
