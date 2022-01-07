// const mongo = require("../mongo");
// const mongoOperations = require("../mongo/mongoOperations");

// const collection = "weapons";

// exports.findByName = async (req, res) => {
//   const name = req.params.name;
//   const result = await mongoOperations.findBy(collection, "name", name);
//   return res.send(result);
// };

// exports.insertOne = async (req, res) => {
//   console.log("weaponsjs insertOne req.body:", req);
//   if (!req.body) throw new Error("missing body in req");
//   const result = await mongoOperations.insertOne(collection, req.body);
//   return res.send(result);
// };
