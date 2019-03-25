const Productos = require('./Producto');
const Categorias = require('./Categorias');
const OrdenCompra = require('./OrdenCompra');
const Usuario = require('./Usuario').Usuario;

OrdenCompra.belongsTo(Usuario, { as: 'owner' });

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

OrdenCompra.belongsToMany(Productos, { through: 'orden_productos', foreignKey: "ordencompraId" });
Productos.belongsToMany(OrdenCompra, { through: 'orden_productos', foreignKey: "productoId" });

module.exports = {
  modelos,
  ordenes
};
