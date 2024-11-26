const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();

router.post("/create", CategoryController.create);

module.exports = router;
