const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
const db = require('./config/db');
const apiRoutes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api', apiRoutes);

app.use(express.static(path.resolve(__dirname, 'public')));

var port = 8080;

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

db.sync({ force: false }).then((con) => {
  console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`);
  app.listen(port, () => console.log('SERVER LISTENING AT PORT', port));
});
