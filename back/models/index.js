const Productos = require('./Producto');
const Categorias = require('./Categorias');
const OrdenCompra = require('./OrdenCompra');

const modelos = {
  Categorias,
  Productos
};

Categorias.belongsToMany(Productos, { through: 'categorias_productos' });
Productos.belongsToMany(Categorias, { through: 'categorias_productos' });

const ordenes = {
  OrdenCompra,
  Productos
};

OrdenCompra.belongsToMany(Productos, { through: 'orden_productos' });
Productos.belongsToMany(OrdenCompra, { through: 'orden_productos' });

module.exports = {
  modelos,
  ordenes
};
