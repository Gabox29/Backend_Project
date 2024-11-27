const { User } = require("../models/index");
const bcrypt = require ('bcryptjs');

const UserController = {
  async create(req, res) {
    try {
      req.body.password = await bcrypt.hashSync(req.body.password, 10);
      const user = await User.create(req.body);
      res.status(201).send({ message: "User created successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something is wrong", error });
    }
  },
};

module.exports = UserController;
