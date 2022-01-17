const mongo = require(".");

exports.findOneAndDelete = async (collection, filter) => {
  // return await mongo.db.collection(collection).findOneAndDelete(filter);
  return await mongo.db.collection("users").findOneAndDelete(filter);
};

exports.deleteMany = async (collection, filter) => {
  return await mongo.db.collection(collection).deleteMany(filter);
};

exports.findOne = async (collection, query = {}, project = {}) => {
  return await mongo.db.collection(collection).findOne(query, project);
};

exports.find = async (collection, query = {}, projection = {}) => {
  const opts = {
    projection
  };

  const result = await mongo.db
    .collection(collection)
    .find(query, opts)
    .toArray();

  return result;
};

exports.insertOne = async (collection, doc) => {
  return await mongo.db.collection(collection).insertOne(doc);
};

exports.insertMany = async (collection, docs) => {
  return await mongo.db.collection(collection).insertMany(docs);
};

exports.findOneAndUpdate = async (collection, filter, update) => {
  return await mongo.db.collection(collection).findOneAndUpdate(filter, update);
};
