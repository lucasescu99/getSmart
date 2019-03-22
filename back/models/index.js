const Productos = require('./Producto');
const Categorias = require('./Categorias');
const Carrito = require('./Carrito')
const Usuario = require('./Usuario').Usuario

const modelos = {
  Categorias,
  Productos,
  Carrito,
  Usuario,
};

Categorias.belongsToMany(Productos, { through: 'categorias_productos' });
Productos.belongsToMany(Categorias, { through: 'categorias_productos' });
// Carrito.belongsTo(Usuario,{as:'owner'})
Usuario.belongsToMany(Productos, { through: Carrito })


module.exports = {
  modelos
};