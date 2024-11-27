const { Order, Product, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const OrderController = {
  async create(req, res) {
    try {
      const order = await Order.create(req.body);
      order.addProduct(req.body.ProductId);
      res.status(201).send({ message: "Order created successfully", order });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
        attributes: ["id", "date"],
        include: {
          model: Product,
          attributes: ["description", "price"],
          through: { attributes: [] },
        },
      });
      res.status(200).send(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
};

module.exports = OrderController;
