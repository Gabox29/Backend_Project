const { Order, Product, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const OrderController = {
  async create(req, res) {
    try {
      const order = await Order.create(req.body);
      res.status(201).send({ message: "Order created successfully", order });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
};

module.exports = OrderController;
