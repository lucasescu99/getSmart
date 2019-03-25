const Productos = require('./Producto');
const Categorias = require('./Categorias');
const Reviews = require('./Reviews');
const Usuario = require('./Usuario').Usuario;

const modelos = {
  Categorias,
  Productos,
  Reviews
};

Categorias.belongsToMany(Productos, { through: 'categorias_productos' });
Productos.belongsToMany(Categorias, { through: 'categorias_productos' });
Reviews.belongsTo(Usuario, { as: 'author' });
Reviews.belongsTo(Productos, { as: 'ref' });

module.exports = {
  modelos
};
