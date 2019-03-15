const express = require('express');
const router = express.Router();
const { Usuario } = require('../models/Usuario')
const passport = require('passport')

router.post('/add', (req, res) => {
  console.log(req.body.user)
  Usuario.create(req.body.user)
    .then(data => res.status(201).send(data))
})

router.get('/todos', (req, res) => {
  Usuario.findAll()
    .then(data => res.send(data))
})

router.post('/login', passport.authenticate('local', { successRedirect: '/usuarios/todos',failureRedirect: '/'}))


module.exports = router