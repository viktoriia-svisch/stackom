const express = require('express');
const mongoose = require('mongoose');
const server = express();
mongoose.connect('mongodb+srv:
  useNewUrlParser: true
});
server.use(express.json);
server.listen(3333);
