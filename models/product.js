"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: models.CategoryProduct,
      });
      Product.belongsToMany(models.Order, {
        through: models.OrderProduct,
      });
      Product.hasMany(models.Review);
    }
  }
  Product.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
          notEmpty: { msg: "Description cannot be empty" }, // Ensures description is not an empty string
          len: {
            args: [5, 255], // Ensures description is between 5 and 255 characters
            msg: "Description must be between 5 and 255 characters",
          },
        },
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: { msg: "Price cannot be empty" },
          isDecimal: { msg: "Price must be a valid decimal number" }, // Ensures price is a decimal
          min: {
            args: [0], // Price must be greater than or equal to 0
            msg: "Price cannot be negative",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          notEmpty: { msg: "Stock cannot be empty" },
          isInt: { msg: "Stock must be an integer" }, // Ensures stock is an integer
          min: {
            args: [0],
            msg: "Stock cannot be negative", // Ensures stock is greater than or equal to 0
          },
        },
      },
      on_sale: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
