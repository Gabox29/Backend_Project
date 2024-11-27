const express = require("express");
const ReviewController = require("../controllers/ReviewController");
const router = express.Router();

router.post("/", ReviewController.create);
router.put("/id/:id", ReviewController.update);
router.delete("/id/:id", ReviewController.delete);
router.get("/getAll", ReviewController.getAll);

module.exports = router;