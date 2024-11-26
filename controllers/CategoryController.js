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
  async update(req, res) {
    try {
      await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      const category = await Category.findByPk(req.params.id);
      res.send({ message: "Category updated successfully", category });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async delete(req,res) {
    try {
      await Category.destroy({
        where:{
          id: req.params.id
        }
      })
      res.send({message:`Category with id ${req.params.id} deleted`})
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  }
};

module.exports = CategoryController;
