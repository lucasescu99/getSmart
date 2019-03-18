const Products = require('../models/Producto');
const express = require('express');
const router = express.Router();
const Productos = require('../models/Producto');

router.post('/add', (req, res, next) => {
  Productos.create(req.body)
    .then(producto => res.send(producto))
    .catch(next);
});

router.put('/edit/:id', (req, res, next) => {
  Productos.findByPk(req.params.id)
    .then(producto => producto.updateAttributes(req.body))
    .then(update => res.status(200).send('Producto modificado'))
    .catch(next);
});
router.get('/', (req, res) => {
  if (req.query.modelo) {
    console.log('query', req.query.modelo)
    Productos.findAll({
      where: {
        modelo: req.query.modelo
      }
    }).then(data => {
      console.log('DATAAAA', data);
      res.send(data);
    }
    );
  } else {
    Products.findAll().then(data => {
      res.send(data);
    }
    );
  }
});
router.get('/:id', (req, res) => {
  Productos.findByPk(req.params.id)
    .then(producto => {
      res.send(producto);
    }
    );
});

module.exports = router;
