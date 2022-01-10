const { findMany, insertMany } = require("../mongo/operations");
const docs = require("./familyImages.json");

exports.seedFamilyImages = async () => {
  const dbDocs = await (
    await findMany("images", { page: "family" }, "name")
  ).toArray();
  console.log("dbDocs:", dbDocs);
  console.log("docs of truth:", docs);

  const dbDocNames = dbDocs.map((doc) => doc.name);

  const missingDocs = [];
  for (const doc of docs) {
    if (!dbDocNames.includes(doc.name)) {
      missingDocs.push(doc);
    }
  }

  if (missingDocs.length) await insertMany("images", missingDocs);
};
