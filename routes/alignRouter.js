var express = require('express');
var alignController = require('../controllers/alignController');
var senAlignController = require('../controllers/senAlignController');
var textAlignController = require('../controllers/textAlignController');

var alignRouter = express();

alignRouter.use('/', alignController);
alignRouter.use('/senAlign', senAlignController);
alignRouter.use('/textAlign', textAlignController);

module.exports = alignRouter;