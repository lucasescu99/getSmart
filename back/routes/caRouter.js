const express = require('express');
const router = express.Router();
const Categorias = require('../models/Categorias');
const Producto = require('../models/Producto');

router.post('/add', (req, res) => {
  Categorias.create(req.body)
    .then(cat => res.json(cat))
    .catch(err => console.log(err));
});

router.get('/get', (req, res) => {
 Categorias.findAll()
  .then( categorias => res.send(categorias))
});

router.get('/:id', (req, res) => {
  Producto.findByPk(req.params.id, {
    include: [Categorias]
  })
  .then(producto => res.send(producto.categorias))
});

module.exports = router
;
