const Productos = require('./Producto')
const Categorias = require('./Categorias')


const modelos = {
  Categorias,
  Productos
}

Categorias.belongsToMany(Productos,{through : 'categorias_productos'})
Productos.belongsToMany(Categorias,{through : 'categorias_productos'})

module.exports = {
  modelos,
}