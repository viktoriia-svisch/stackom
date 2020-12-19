const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const server = express();
server.use(express.json);
server.use(routes);
server.listen(3333);
