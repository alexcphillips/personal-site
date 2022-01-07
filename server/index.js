const mongo = require("./mongo");
const { app } = require("./app");

(async () => {
  await mongo.mongoConnect();

  console.log("mongo connection SUCCESSFUL");

  app.listen(process.env.PORT, () => {
    console.log("Server started SUCCESSFULLY on port", process.env.PORT);
  });
})();
