const mongo = require("./mongo");
const { app } = require("./app");
const path = require("path");
const https = require("https");
const fs = require("fs");

const { seedFamilyImages } = require("./scripts/dbSeed");

let isDev = process.env.NODE_ENV === "dev";

let envPath = null;
if (isDev) {
  envPath = "../.env.dev";
} else {
  envPath = "../.env";
}

const pathUsed = path.join(__dirname, envPath);
require("dotenv").config({ path: pathUsed });

(async () => {
  await mongo.connect(process.env.MONGO_URI);
  // await seedFamilyImages();

  let opts = {
    key: fs.readFileSync("./sslkey.pem"),
    cert: fs.readFileSync("./sslcert.pem"),
    passphrase: process.env.SSL_PASSPHRASE
  };

  if (!(opts.key && opts.cert && opts.passphrase)) {
    throw new Error("Missing key, cert, or passphrase");
  }
  https.createServer(opts, app).listen(process.env.PORT);
})();
