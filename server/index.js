const mongo = require("./mongo");
const { app } = require("./app");
const path = require("path");
// const https = require("https");
// const fs = require("fs");

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

  // let opts = {
  //   key: fs.readFileSync("./ssl.key"),
  //   cert: fs.readFileSync("./ssl.cert"),
  //   passphrase: process.env.SSL_PASSPHRASE
  // };

  // console.log(opts);

  // if (!(opts.key && opts.cert && opts.passphrase)) {
  //   if (isDev) {
  //     console.log(opts.key);
  //     console.log(opts.cert);
  //     console.log(opts.passphrase);
  //   }
  //   throw new Error("Missing key, cert, or passphrase");
  // }

  // https.createServer(app).listen(process.env.PORT, () => {
  //   console.log("Listening on port", process.env.PORT);
  // });

  app.listen(process.env.PORT, () => {
    console.log("Server started SUCCESSFULLY");
  });
})();
