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

// router.post('/addProd', (req, res) => {
//   Productos.create({
//     marca: 'Samsung',
//     modelo: 'S9',
//     descripcion: 'El Samsung Galaxy S8 introduce un elegante diseño con una innovadora pantalla de 5.8 pulgadas que va de extremo a extremo, eliminando los bordes, para brindarte una experiencia visual inmersiva y envolvente. Presenta, además, sus nuevos sistemas de bloqueo a través de reconocimiento facial y escaneo de iris diseñados exclusivamente para una seguridad integral.',
//     stock: 15,
//     precio: '25.000',
//     imagenes: ['https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/galaxy-s8/black/device-left.png.transform/pdpCarousel/image.jpg', 'https://imagenes.coolmod.com/samsung-galaxy-s8plus-4g-64gb-libre-gris-orquadea-smartphone-mavil-001.jpg']
//   })
//     .then(prod => res.json(prod))
//     .catch(err => console.log(err));
// });


module.exports = router;
