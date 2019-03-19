const express = require('express');
const router = express.Router();
const Categorias = require('../models/Categorias');

router.post('/add', (req, res) => {
  Categorias.create(req.body)
    .then(cat => res.json(cat))
    .catch(err => console.log(err));
});

router.get('/get', (req, res) => {
 Categorias.findAll()
  .then( categorias => res.send(categorias))
});


module.exports = router
;
