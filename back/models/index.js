const Productos = require('./Producto');
const Categorias = require('./Categorias');
const Carrito = require('./Carrito');

const modelos = {
  Categorias,
  Productos
};

Categorias.belongsToMany(Productos, { through: 'categorias_productos' });
Productos.belongsToMany(Categorias, { through: 'categorias_productos' });

const carrito = {
  Carrito,
  Productos
};

Carrito.belongsToMany(Productos, { through: 'carrito_productos' });
Productos.belongsToMany(Carrito, { through: 'productos_carritos'});

module.exports = {
  modelos,
  carrito
};
