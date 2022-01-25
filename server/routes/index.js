const router = require("express").Router();

const family = require("./family");
// const homepage = require("./homepage");
const user = require("./user");

const redirect = require("./redirect");

const auth = require("./middleware/auth");

router.get("/familyImages", family.find);
router.get("/familyImagesInfo", family.getInfo);
router.post("/familyImages", family.insertOne);

// router.get("/homepageImage", homepage.find);

router.get("/user/:id", auth, user.find);
router.put("/user/:id", user.update);
router.delete("/user/:id", user.delete);

router.post("/register", user.register);
router.post("/login", user.login);
router.post("/logout", user.logout);

router.get("/user/keybinds/:id", user.findKeybinds);
router.put("/user/keybinds/:id", user.updateKeybinds);

// router.get("/game/player/:id", game.findById);

router.get("*", redirect.destination);

module.exports = router;
