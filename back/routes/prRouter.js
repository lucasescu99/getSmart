/* eslint-disable no-undef */
const Products = require('../models/Producto');
const express = require('express');
const router = express.Router();
const modelos = require('../models/index').modelos;

router.post('/add', (req, res, next) => {
  modelos.Productos.create(req.body)
    .then(producto => {
      producto.setCategorias(req.body.categorias);
      res.send(producto);
    })
    .catch(next);
});

router.put('/edit/:id', (req, res, next) => {
  modelos.Productos.findByPk(req.params.id)
    .then(producto => producto.updateAttributes(req.body))
    .then(update => res.send(update))
    .catch(next);
});
router.get('/', (req, res) => {
  if (req.query.modelo) {
    modelos.Productos.findAll({
      where: {
        modelo: req.query.modelo
      }
    }).then(data => {
      res.send(data);
    });
  } else {
    Products.findAll().then(data => {
      res.send(data);
    });
  }
});
router.get('/:id', (req, res) => {
  modelos.Productos.findByPk(req.params.id)
    .then(producto => {
      res.send(producto);
    }
    );
});

router.delete(('/:id'), (req, res, next) => {
  modelos.Productos.destroy({ where: { id: req.params.id } })
    .catch(err => console.log(err));
});

module.exports = router;
