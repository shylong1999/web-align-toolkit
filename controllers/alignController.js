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
    var value = req.body.value;
    alignRepo.addMultiple(value).then(function () {
        res.json({
            message: 'Alignment',
        });
    })
});

router.post('/addRow', (req, res) => {
    var obj = req.body;
    var value = [obj.lang1, obj.lang2, obj.scope, 1];
    alignRepo.addRow(value).then(function () {
        res.json({
            message: 'Add oke',
        });
    })
});
router.put('/updateRow', (req, res) => {
    var obj = req.body;
    alignRepo.updateRow(obj).then(function () {
        res.json({
            message: 'Update oke',
        });
    })
});

router.delete('/deleteRow', (req, res) => {
    var id = req.params.id;
    alignRepo.deleteRow(id).then(function () {
        res.json({
            message: 'DElete oke',
        });
    })
});

module.exports = router;