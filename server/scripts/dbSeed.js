const { find, insertMany } = require("../mongo/operations");
const docs = require("./familyImages.json");

exports.seedFamilyImages = async () => {
  const dbDocs = await find("images", { page: "family" }, { name: 1, _id: 0 });

  const dbDocNames = dbDocs.map((doc) => doc.name);
  const missingDocs = [];

  for (const doc of docs) {
    if (!dbDocNames.includes(doc.name)) {
      missingDocs.push(doc);
    }
  }

  if (missingDocs.length) await insertMany("images", missingDocs);
};
