const { MongoClient } = require("mongodb");
exports.db = null;

exports.mongoConnect = async (uri) => {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Mongodb connected SUCCESSFULLY");
    exports.db = client.db();
  } catch (err) {
    console.log(err);
  }
};
