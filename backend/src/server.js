const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();
mongoose.connect('mongodb+srv:
  useNewUrlParser: true
});
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);
