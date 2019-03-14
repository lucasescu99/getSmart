const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// router.post('/', (req, res) => {
//     Favourites.create(req.body)
//       .then(fav => res.send(fav))
//   })

router.get('/product/:product', (req, res) => {
  Producto.findAll({ where: { marca: req.params } })
    .then(data => res.send(data));
});

module.exports = router;
