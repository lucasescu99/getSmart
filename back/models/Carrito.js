const S = require('sequelize');
const db = require('../config/db');

const Carrito = db.define('carrito', {
  cantidad: {
    type: S.INTEGER,
    allowNull: false
  }
});
// cantidad de product id
// User belong to many
Carrito.belongsTo(Carrito, { as: 'owner' });

module.exports = Carrito;
