const { Review, User, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const ReviewController = {
  async create(req, res, next) {
    try {
      const review = await Review.create(req.body);
      res.status(201).send({ message: "Review created successfully", review });
    } catch (error) {
      console.error(error);
      next(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async update(req, res) {
    try {
      await Review.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      const review = await Review.findByPk(req.params.id);
      res.send({ message: "Review updated successfully", review });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async delete(req, res) {
    try {
      await Review.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ message: `Review with id ${req.params.id} deleted` });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
  async getAll(req, res) {
    try {
      const reviews = await Review.findAll({
        attributes: ["id", "description"],
        include: {
          model: User,
          attributes: ["first_name", "last_name"],
        },
      });
      res.status(200).send(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
};

module.exports = ReviewController;
