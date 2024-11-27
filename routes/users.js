const express = require("express");
const UserController = require("../controllers/UserController");
const { authentication } = require("../middleware/authentication");
const router = express.Router();

router.post("/create", UserController.create);
router.post("/login", UserController.login);
router.get("/getAll", UserController.getAll);
router.delete("/logout", authentication, UserController.logout);

module.exports = router;
