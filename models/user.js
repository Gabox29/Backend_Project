"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order);
      User.hasMany(models.Review);
    }
  }
  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
          notEmpty: { msg: "First name cannot be empty" }, 
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Last name cannot be empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Email cannot be empty" },
          isEmail: { msg: "Must be a valid email address" }, 
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Password cannot be empty" },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Role cannot be empty" },
        },
      },
      birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Birth date cannot be empty" },
          isDate: { msg: "Must be a valid date" }, 
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
