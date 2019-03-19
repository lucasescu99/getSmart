const express = require('express');
const router = express.Router();
const { Usuario } = require('../models/Usuario');
const passport = require('passport');

router.post('/esAdm', (req, res) => {
  Usuario.findOne({ where: { email: req.body.email } })
    .then(data => {
      return data.update({ isAdmin: true }, { where: { isAdmin: false } });
    })
    .then(data => console.log(data));
});

router.get('/todos', (req, res) => {
  if (!req.user.dataValues.nombre) res.send(404, 'cantfindthat');
  res.send(req.user.dataValues.nombre);
});

router.post('/crea', (req, res) => {
  console.log(req.body.user);
  Usuario.create(req.body.user)
    .then(data => res.status(201).send(data));
});

router.get('/failurelogin', (req, res) => {
  res.send('cantfindthat');
});

router.get('/user', (req, res) => {
  res.send(req.user);
});

router.get('/logOut', (req, res) => {
  req.logout();
  res.send({});
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  }
});

// console.log(req.body + "//LOGIN/////////")
// PASSPORT HACE UN Request.ISAUTHENTICATE (TRUE O FALSE, req.isauthenticate = (true) Y REQ.USER. algo (es lo que está en la base de datos), eso lo paso en nnuevo objeto al front como respuesta; en el front tengo axios tengo en el res.data --> guardo local storage res.data que me da el axios.

// router.post('/add', (req, res) => {
//   console.log(req.body.user)
//   Usuario.create(req.body.user)
//     .then(data => res.status(201).send(data))
// })

// router.get('/todos', (req, res) => {
//   Usuario.findAll()
//     .then(data => res.send(data))
// })

// router.post('/login', passport.authenticate('local', { successRedirect: '/usuarios/todos',failureRedirect: '/'}))

module.exports = router;
