var express = require('express');
var alignController = require('../controllers/alignController');

var alignRouter = express();

alignRouter.use('/', alignController);

module.exports = alignRouter;