const mongo = require("../mongo");

exports.findOneBy = async (collection, key, val) => {
  const opts = {};
  opts[key] = val;
  return await mongo.db.collection(collection).findOne(opts);
};

exports.findManyBy = async (collection, key, val) => {
  const opts = {};
  opts[key] = val;
  return await mongo.db.collection(collection).find(opts);
};

exports.insertOne = async (collection, doc) => {
  return await mongo.db.collection(collection).insertOne(doc);
};
