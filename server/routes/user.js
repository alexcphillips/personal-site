const {
  findOne,
  insertOne,
  findOneAndUpdate,
  findOneAndDelete
} = require("../mongo/operations");

const { keybindsSchema } = require("./schemas/keybinds");
const { userSchema } = require("./schemas/user");
const { validate } = require("./schemas/validate");

exports.find = async (req, res) => {
  const result = await findOne("users", { _id: req.params.id });
  res.status(200).send(result);
};

exports.insertOne = async (req, res) => {
  let isValid = validate(req.body, userSchema);

  if (isValid === true) {
    const result = await insertOne("users", req.body);
    return res.status(201).send(result);
  }
  return res.status(400).send(isValid);
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
