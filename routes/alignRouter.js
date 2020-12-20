var express = require('express');
var alignController = require('../controllers/alignController');
var senAlignController = require('../controllers/senAlignController');

var alignRouter = express();

alignRouter.use('/', alignController);
alignRouter.use('/senAlign', senAlignController);

module.exports = alignRouter;