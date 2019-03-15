const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var passport = require('passport')
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy
var path = require('path');
var morgan = require('morgan');
const db = require('./config/db');
const apiRoutes = require('./routes');
const { Usuario } = require('./models/Usuario')

app.use(session({ secret: "passport" }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api', apiRoutes);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
}); /* esta funcion esta serializando el usuario=> como guardo el usuario*/

passport.deserializeUser(function (id, done) {
  Usuario.findById(id)
    .then(user => done(null, user))
}); /* esta funcion esta deserializando el usuario => como veo el usuario*/


// ESTRATEGIA DE AUTORIZACION
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function (username, password, done) {
    console.log('passport CL', username, password)
    Usuario.findOne({ where: { email: username } })
      .then(function (user) {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      })
      .catch(done);
  }
));

/*TODAS LAS RUTAS DE USUARIO*/
app.post('/api/usuarios/esAdm', (req, res) => {
  Usuario.findOne(req.body)
    .then(data => Usuario.update({ isAdmin: false, }, { where: { isAdmin: true } }))
    .then(data => res.send(data))
})

app.get('/api/usuarios/todos', (req, res) => {
  if (!req.user.dataValues.nombre) res.send(404, 'cantfindthat')
  res.send(req.user.dataValues.nombre)
})

app.get('/failurelogin', (req, res) => {
  res.send('cantfindthat')
})

app.post('/api/usuarios/crea', (req, res) => {
  console.log(req.body.user)
  Usuario.create(req.body.user)
    .then(data => res.status(201).send(data))
})

// app.post('/usuarios/login', passport.authenticate('local', { successRedirect: '/usuarios/todos',failureRedirect: '/'}))
app.post('/api/usuarios/login', passport.authenticate('local', { failureRedirect: '/failurelogin' }),
  function (req, res) {
    res.redirect('/api/usuarios/todos');
  });

app.use(express.static(path.resolve(__dirname, 'public')));

var port = 3000;

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

db.sync({ force: false }).then((con) => {
  console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`);
  app.listen(port, () => console.log('SERVER LISTENING AT PORT', port));
});
