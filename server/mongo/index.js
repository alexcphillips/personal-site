const path = require("path");
const fs = require("fs");
envPath =
  process.env.NODE_ENV === "dev" ? "../../.env.dev" : (envPath = "../../.env");
require("dotenv").config({ path: path.join(__dirname, envPath) });

const { MongoClient } = require("mongodb");
exports.db = null;

exports.mongoConnect = async () => {
  const file = fs.readFileSync(path.join(__dirname, "../../.env"));
  console.log("~~~ the .env data:", file.toString());

  console.log(`~~~ process.env: ${JSON.stringify(process.env)}`);
  console.log(`~~~ attempting to connect to: ${process.env.MONGO_URI}`);

  // const client = await MongoClient.connect(process.env.MONGO_URI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // });

  // exports.db = client.db();
  // return exports.db;
};
