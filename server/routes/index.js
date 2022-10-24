const router = require("express").Router();

const user = require("./user");
const redirect = require("./redirect");
const auth = require("./middleware/auth");

router.get("/user/:id", auth, user.find);
router.put("/user/:id", user.update);
router.delete("/user/:id", user.delete);

router.post("/register", user.register);
router.post("/login", user.login);
router.post("/logout", user.logout);

router.get("*", redirect.destination);

module.exports = router;
