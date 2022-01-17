const router = require("express").Router();

const family = require("./family");
const redirect = require("./redirect");
const user = require("./user");
const game = require("./game");

const auth = require("./middleware/auth");

router.get("/familyImages", family.find);
router.get("/familyImagesInfo", family.getInfo);
router.post("/familyImages", family.insertOne);

router.get("/user/:id", user.find);
router.put("/user/:id", user.update);
router.delete("/user/:id", user.delete);

router.post("/register", user.register);
router.post("/login", auth, user.login);

router.get("/user/keybinds/:id", user.findKeybinds);
router.put("/user/keybinds/:id", user.updateKeybinds);

router.get("/game/player/:id", game.findById);

router.get("*", redirect.destination);

module.exports = router;
