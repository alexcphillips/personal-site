const { findMany, insertMany } = require("../mongo/operations");
const docs = require("./familyImages.json");

exports.seedFamilyImages = async () => {
  const dbDocs = await findMany(
    "images",
    { page: "family" },
    { name: 1, _id: 0 }
  );

  const dbDocNames = dbDocs.map((doc) => doc.name);
  const missingDocs = [];

  console.log("docs:", dbDocs);

  for (const doc of docs) {
    if (!dbDocNames.includes(doc.name)) {
      missingDocs.push(doc);
    }
  }
  console.log(missingDocs);

  if (missingDocs.length) await insertMany("images", missingDocs);
};
