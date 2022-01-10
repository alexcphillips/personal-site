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

exports.findMany = async (collection, key, val, project) => {
  const opts = {};
  opts[key] = val;
  return await mongo.db.collection(collection).find(opts, project);
};

exports.insertOne = async (collection, doc) => {
  return await mongo.db.collection(collection).insertOne(doc);
};

exports.insertMany = async (collection, docs) => {
  return await mongo.db.collection(collection).insertMany(docs);
};
