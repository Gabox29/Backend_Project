const { Category, Product, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const ProductController = {
  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      product.addCategory(req.body.CategoryId)
      res.status(201).send({ message: "Product created successfully", product });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
};

module.exports = ProductController;
