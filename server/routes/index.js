const router = require("express").Router();
const family = require("./family");
const redirect = require("./redirect");
// const keybinds = require("./keybinds");
const user = require("./user");

router.get("/familyImages", family.find);
router.get("/familyImagesInfo", family.getInfo);
router.post("/familyImages", family.insertOne);

// router.get("/keybinds", keybinds.find);
// router.put("/keybinds/:key", keybinds.update);

router.get("/user/:id", user.find);
router.post("/user", user.insertOne);
router.put("/user/:id", user.update);
router.delete("/user/:id", user.delete);

router.get("*", redirect.destination);

module.exports = router;
