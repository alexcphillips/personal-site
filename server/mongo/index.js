const path = require("path");
const fs = require("fs");
envPath =
  process.env.NODE_ENV === "dev" ? "../../.env.dev" : (envPath = "../../.env");
require("dotenv").config({ path: path.join(__dirname, envPath) });

const { MongoClient } = require("mongodb");
exports.db = null;

exports.mongoConnect = async () => {
  fs.readFile(path.join(__dirname, "../../.env"), (err, data) => {
    if (err) throw err;
    console.log("~~~ the .env data:", data.toString());
  });

  console.log(`~~~ attempting to connect to: ${process.env.MONGO_URI}`);
  console.log(`~~~ process.env: ${JSON.stringify(process.env)}`);

  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  exports.db = client.db();
  return exports.db;
};
