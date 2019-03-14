const express = require('express');
const router = express.Router();
const Productos = require('../models/Producto');

router.post('/add', (req, res, next) => {
  Productos.create(req.body)
    .then(producto => res.send(producto))
    .catch(next);
});

router.get('/search/:id', (req, res, next) => {
  Productos.findByPk(req.params.id)
    .then(product => res.json(product))
    .catch(next);
});

router.put('/edit/:id', (req, res, next) => {
  Productos.findByPk(req.params.id)
    .then(producto => producto.updateAttributes(req.body))
    .then(update => res.status(200).send('Producto modificado'))
    .catch(next);
});

module.exports = router;
