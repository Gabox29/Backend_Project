const express = require("express");
const OrderController = require("../controllers/OrderController");
const router = express.Router();

router.post("/", OrderController.create);
// router.put("/id/:id", OrderController.update);

module.exports = router;
