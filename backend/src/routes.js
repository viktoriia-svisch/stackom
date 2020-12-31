const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const router = express.Router();
router.post('/devs', DevController.store);
router.post('/devs/:devId/likes', LikeController.store)
module.exports = router;
