const {
  findOne,
  insertOne,
  findOneAndUpdate,
  findOneAndDelete
} = require("../mongo/operations");

exports.find = async (req, res) => {
  const result = await findOne("users", { _id: req.params.id });
  res.status(200).send(result);
};

exports.insertOne = async (req, res) => {
  const result = await insertOne("users", req.body);
  res.status(201).send(result);
};

exports.update = async (req, res) => {
  const result = await findOneAndUpdate(
    "users",
    { _id: req.params.id },
    { $set: req.body }
  );

  return res.status(200).send(result);
};

exports.delete = async (req, res) => {
  const result = await findOneAndDelete("users", { _id: req.params.id });

  return res.status(200).send(result);
};

exports.findKeybinds = async (req, res) => {
  const result = await findOne("users", { _id: req.params.id });
  return res.status(200).send(result);
};

exports.updateKeybinds = async (req, res) => {
  const result = await findOneAndUpdate(
    "users",
    { _id: req.params.id },
    { $set: req.body }
  );

  return res.status(200).send(result);
};
