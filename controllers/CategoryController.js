const { Category } = require("../models/index");

const CategoryController = {
  async create(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(201).send({ message: "Category created successfully", category });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
};

module.exports = CategoryController;
