var express = require('express');
var restrict = require('../middle-wares/restrict');
var alignRepo = require('../repos/alignRepo');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('alignment/index');

});


router.post('/add', (req, res) => {
    // var value = [['abc','evs',0.8,1],['abc','evs',0.3,2],['abc','evs',0.5,4]];
    console.log(req.body.value);
    var value =  req.body.value;
    alignRepo.addMultiple(value).then(function() {
        res.json({
            message: 'Alignment',
        });
    })
});


module.exports = router;