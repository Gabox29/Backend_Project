"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        description: "High-quality wireless headphones with noise cancellation",
        price: 99.99,
        stock: 150,
        on_sale: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Ergonomic office chair with lumbar support and adjustable height",
        price: 199.99,
        stock: 60,
        on_sale: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Stainless steel water bottle with double-wall insulation, 32 oz",
        price: 24.99,
        stock: 200,
        on_sale: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Compact smartphone tripod with Bluetooth remote control",
        price: 29.99,
        stock: 120,
        on_sale: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Premium gel memory foam mattress, queen size, 12-inch thick",
        price: 499.99,
        stock: 30,
        on_sale: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
