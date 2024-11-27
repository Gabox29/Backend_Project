const express = require("express");
const ProductController = require("../controllers/ProductController");
const { authentication } = require("../middlewares/authentication");
const router = express.Router();

router.post("/", authentication, ProductController.create);
router.put("/id/:id", authentication, ProductController.update);
router.delete("/id/:id", authentication, ProductController.delete);
router.get("/getAll", ProductController.getAll);
router.get("/id/:id", ProductController.getById);
router.get("/description/:description", ProductController.getByDescription);
router.get("/price/:price", ProductController.getByPriceGt);
router.get("/getAllOrderDesc", ProductController.getAllOrderDesc);

module.exports = router;
