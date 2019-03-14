const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
const db = require('./config/db');
const usRouter = require('./routes/usRouter');
const prRouter = require('./routes/prRouter');
const caRouter = require('./routes/caRouter');
const ocRouter = require('./routes/ocRouter');
const carrRouter = require('./routes/carrRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/usuarios', usRouter);
app.use('/productos', prRouter);
app.use('/categorias', caRouter);
app.use('/ordencompra', ocRouter);
app.use('/carrito', carrRouter);

app.use(express.static(path.resolve(__dirname, 'public')));

var port = 3000;

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

db.sync({ force: false }).then((con) => {
  console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`);
  app.listen(port, () => console.log('SERVER LISTENING AT PORT', port));
});
