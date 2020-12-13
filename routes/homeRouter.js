var express = require('express');
var homeController = require('../controllers/homeController');

var homeRouter = express();

homeRouter.use('/', homeController);
// homeRouter.use('/pq', phanQuyenController);

module.exports = homeRouter;