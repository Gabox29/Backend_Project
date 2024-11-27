const { Product, Category, CategoryProduct, OrderProduct, Review, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const ProductController = {
  async create(req, res, next) {
    try {
      const product = await Product.create(req.body);
      product.addCategory(req.body.CategoryId);
      res.status(201).send({ message: "Product created successfully", product });
    } catch (error) {
      console.error(error);
      next(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async update(req, res) {
    try {
      await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      const product = await Product.findByPk(req.params.id);
      product.setCategories(req.body.CategoryId);
      product.setOrders(req.body.OrderId);
      res.send({ message: "Product updated successfully", product });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async delete(req, res) {
    try {
      await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      await CategoryProduct.destroy({
        where: {
          ProductId: req.params.id,
        },
      });
      await OrderProduct.destroy({
        where: {
          ProductId: req.params.id,
        },
      });
      res.send({ message: `Product with id ${req.params.id} deleted` });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async getAll(req, res) {
    try {
      const products = await Product.findAll({
        attributes: ["description", "price"],
        include: [
          {
            model: Category,
            attributes: ["description"],
            through: { attributes: [] },
          },
          {
            model: Review,
            attributes: ["description", "date"],
          },
        ],
      });
      res.status(200).send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async getById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id, {
        attributes: ["id", "description", "price"],
        include: [
          {
            model: Category,
            attributes: ["description"],
            through: { attributes: [] },
          },
          {
            model: Review,
            attributes: ["description", "date"],
          },
        ],
      });
      res.send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async getByDescription(req, res) {
    try {
      const products = await Product.findAll({
        attributes: ["id", "description", "price"],
        where: {
          description: {
            [Op.like]: `%${req.params.description}%`,
          },
        },
      });
      res.send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async getByPriceGt(req, res) {
    try {
      const products = await Product.findAll({
        attributes: ["id", "description", "price"],
        where: {
          price: {
            [Op.gt]: parseFloat(req.params.price),
          },
        },
      });
      res.send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async getAllOrderDesc(req, res) {
    try {
      const products = await Product.findAll({
        attributes: ["id", "description", "price"],
        order: [["price", "DESC"]],
      });
      res.send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
};

module.exports = ProductController;
