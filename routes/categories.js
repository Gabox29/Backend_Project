const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();

router.post("/", CategoryController.create);
router.put("/id/:id", CategoryController.update);
router.delete("/id/:id", CategoryController.delete);
router.get("/getAll", CategoryController.getAll);
router.get("/id/:id", CategoryController.getById);
router.get("/description/:description", CategoryController.getByDescription);

module.exports = router;
