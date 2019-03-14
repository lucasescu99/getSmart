const express = require('express');
const router = express.Router();
const Productos = require('../models/Producto')

router.get('/search/:id', (req, res) => {
  Productos.findByPk(req.params.id)
    .then(producto => {
      res.send(producto);
    }
)});

router.post('/addProd', (req, res) => {
  console.log("hola")
  Productos.create({
    marca: 'Samsung',
    modelo: 'S9',
    descripcion: 'El Samsung Galaxy S8 introduce un elegante diseño con una innovadora pantalla de 5.8 pulgadas que va de extremo a extremo, eliminando los bordes, para brindarte una experiencia visual inmersiva y envolvente. Presenta, además, sus nuevos sistemas de bloqueo a través de reconocimiento facial y escaneo de iris diseñados exclusivamente para una seguridad integral.',
    stock: 15,
    precio: '25.000',
    imagenes: ['https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/galaxy-s8/black/device-left.png.transform/pdpCarousel/image.jpg','https://imagenes.coolmod.com/samsung-galaxy-s8plus-4g-64gb-libre-gris-orquadea-smartphone-mavil-001.jpg']
  })
    .then(prod => res.json(prod))
    .catch(err => console.log(err));
});



module.exports = router;
