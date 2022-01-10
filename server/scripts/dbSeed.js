const { insertMany } = require("../mongo/operations");
const docs = require("./familyImages.json");

exports.seedFamilyImages = (async () => {
  await insertMany("images", docs);
})();
