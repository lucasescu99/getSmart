const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto')
const Carrito = require('../models/Carrito')
const Usuario = require('../models/Usuario')
const modelos = require('../models/index').modelos


router.post('/create', (req, res) => { /*CREA UN CARRITO POR USUARIO*/
  modelos.Carrito.create({ cantidad: 28, usuarioId: 2, productoId: 1 })
    .then(carrito =>
      res.send(carrito))
    .catch(err => console.log(err))
});

router.get('/:id', (req, res) => { /* BUSCAR CARRITOS POR USUARIO Y ME TRAE UN ARREGLO */
  const userid = 2
  modelos.Carrito.findAll({ where: { usuarioId: userid } })
    .then(carrito => {
      res.send(carrito)
        .catch(err => console.log(err))
    });
})

router.put('/update/:id', (req, res) => { /*  AGREGA PRODUCTOS A UN CARRITO EXISTENTE, PREVIO LO BUSCA POR ID */
  modelos.Carrito.findOne({ where: { usuarioId: 2, productoId:2 } })
    .then(carrito => {
      carrito.updateAttributes({cantidad:carrito.cantidad+3})
      res.send(carrito)
    })
    .catch(err => console.log(err))
});

module.exports = router;
