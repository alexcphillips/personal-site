const mongo = require(".");

exports.findOneAndDelete = async (collection, filter) => {
  return await mongo.db.collection(collection).findOneAndDelete(filter);
};

exports.deleteMany = async (collection, filter) => {
  return await mongo.db.collection(collection).deleteMany(filter);
};

exports.findOne = async (collection, key, val, project = {}) => {
  const opts = {};
  opts[key] = val;
  return await mongo.db.collection(collection).findOne(opts, project);
};

exports.findMany = async (collection, query, projection = {}) => {
  const opts = {
    projection
  };

  console.log(query);
  const result = await mongo.db
    .collection(collection)
    .find(query, opts)
    .toArray();
  // const result = await mongo.db.collection("images").find({}).toArray();

  console.log("result:", result);
  return result;
};

exports.insertOne = async (collection, doc) => {
  return await mongo.db.collection(collection).insertOne(doc);
};

exports.insertMany = async (collection, docs) => {
  return await mongo.db.collection(collection).insertMany(docs);
};
