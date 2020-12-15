var express = require('express');
var restrict = require('../middle-wares/restrict');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('alignment/index');

});


module.exports = router;