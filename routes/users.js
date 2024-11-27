const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

router.post("/create", UserController.create);
router.post("/login", UserController.login);
router.get("/getAll", UserController.getAll);


module.exports = router;
