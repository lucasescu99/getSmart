const express = require('express');
const router = express.Router();
const Usuario = require ('../models/Usuario')

// router.post('/users/add', (req, res) => {
//     User.create({email: 'ombaez@gmail.com', password:'pass1234'})
//       .then(user => console.log(user))
//   })

 
//   router.get('/', (req, res) => {
//     res.send(templates.index(req.user))
//   })

//   router.post('/userReg/login', (req, res) => {
//     console.log(req.body)
// })

//   router.get('/register', (req, res) => {
//     res.send(templates.register(req.user))
//   })


  module.exports = router