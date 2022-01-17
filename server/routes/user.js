const {
  findOne,
  insertOne,
  findOneAndUpdate,
  findOneAndDelete
} = require("../mongo/operations");

const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// const { keybindsSchema } = require("./schemas/keybinds");
// const { userSchema } = require("./schemas/user");
// const { validate } = require("./schemas/validate");

exports.find = async (req, res) => {
  const result = await findOne("users", { _id: req.params.id });
  res.status(200).send(result);
};

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(username && email && password)) {
      return res.status(400).send("All input is required");
    }

    const oldUser = await findOne("users", { email });

    if (oldUser) {
      return res.status(409).send("User Already Exists. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await insertOne("users", {
      username,
      email: email.toLowerCase(),
      password: encryptedPassword
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h"
      }
    );

    user.token = token;

    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!((username || email) && password)) {
      res.status(400).send("Additional input required");
    }

    const user = await findOne("users", { email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h"
        }
      );
      user.token = token;

      return res.status(200).json(user);
    }

    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(error);
  }
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
  const result = await findOneAndDelete("users", {
    _id: ObjectId(req.params.id)
  });
  console.log(result);
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
