const router = require("express").Router();
const family = require("./family");
const redirect = require("./redirect");
// const weapons = require("./weapons");

router.get("/familyImages", family.find);
router.get("/familyImagesInfo", family.getInfo);
router.post("/familyImages", family.insertOne);

// router.get("/weapon:name", weapons.findByName);
// router.post("/weapon", weapons.insertOne);

// router.get("/files", excel.find);

router.get("*", redirect.destination);

module.exports = router;
