const path = require("path");
envPath =
  process.env.NODE_ENV === "dev" ? "../../.env.dev" : (envPath = "../../.env");
require("dotenv").config({ path: path.join(__dirname, envPath) });

const { MongoClient } = require("mongodb");
exports.db = null;

exports.mongoConnect = async () => {
  console.log(`~~~ attempting to connect to: ${process.env.MONGO_URI}`);

  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  exports.db = client.db();
  return exports.db;
};
