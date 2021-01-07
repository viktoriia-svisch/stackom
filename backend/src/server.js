const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const server = express();
mongoose.connect('mongodb+srv:
  useNewUrlParser: true
});
server.use(express.json);
server.use(routes);
server.listen(3333);
