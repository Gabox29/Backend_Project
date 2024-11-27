const { User, Token } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

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
  async login(req, res) {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(400).send({ message: "Incorrect email or password" });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Incorrect email or password" });
    }
    let token = jwt.sign({ id: user.id }, jwt_secret);
    await Token.create({ token, UserId: user.id }); //guardar Token en la tabla Tokens
    res.send({ token, message: "Successfully logged", user });
  },
};

module.exports = UserController;
