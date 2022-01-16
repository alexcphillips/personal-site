const fs = require("fs");
const path = require("path");
const { insertOne } = require("../mongo/operations");

// const { validate } = require("./schemas/validate");
// const { familyImageSchema } = require("./schemas/familyImage");
const mongo = require("../mongo");

exports.find = (req, res) => {
  fs.readdir(
    path.join(__dirname, "../../public/familyImages"),
    (err, files) => {
      if (err) throw err;
      return res.status(200).send(files);
    }
  );
};

exports.getInfo = async (req, res) => {
  const result = await mongo.db
    .collection("images")
    .find({ page: "family" })
    .toArray();
  res.status(200).send(result);
};

exports.insertOne = async (req, res) => {
  // const validationResult = validate(req.body, familyImageSchema);
  // if (validationResult) {
  //   await insertOne("images", req.body);
  //   return res.status(201).send();
  // }
  // return res.status(400).send(validationResult);
  await insertOne("images", req.body);
  return res.status(201).send();
};
