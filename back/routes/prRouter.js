const Products = require('../models/Producto');
const express = require('express');
const router = express.Router();

router.get('/:model', (req, res) => {
  Products.findAll().then(data => res.send(data));
});

router.post('/addpr', (req, res) => {
  Products.create({
    nombre: 'lucas',
    marca: 'Samsung',
    modelo: 's7',
    descripcion: 'holaholahola',
    stock: 50,
    precio: 5000,
    imagenes: ['https://overline.com/wp-content/uploads/2017/02/Samsung-Galaxy-S7-edge-png.png']
  }).then(producto => {
    res.json(producto);
  });
});

module.exports = router;
