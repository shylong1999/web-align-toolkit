var express = require('express');
var restrict = require('../middle-wares/restrict');
var senAlignRepo = require('../repos/senAlignRepo');
var router = express.Router();
//
// router.get('/', (req, res) => {
//     res.render('alignment/index');
//
// });


router.post('/addMultiSen', (req, res) => {
    // var value = [['abc','evs',0.8,1],['abc','evs',0.3,2],['abc','evs',0.5,4]];
    console.log(req.body.value);
    var value = req.body.value;
    senAlignRepo.addMultiple(value).then(function () {
        res.json({
            code: 200,
            message: 'Thành công',
        });
    },function (err) {
        res.json({
            code: 400,
            message: 'Thất bại',
        });
    })
});
router.post('/copyItem', (req, res) => {
    // var value = [['abc','evs',0.8,1],['abc','evs',0.3,2],['abc','evs',0.5,4]];
    console.log(req.body.data);
    var data = req.body.data;
    var text = `(`;
    if (data){

        data.forEach(function(item) {
            text+= item.id + ',';
        })
        text = text.substring(0, text.length-1);
        text+= ')';
    }
    console.log(text);

    senAlignRepo.copyItem(text).then(function () {
        res.json({
            code: 200,
            message: 'Thành công',
        });
    },function (err) {
        res.json({
            code: 400,
            message: 'Thất bại',
        });
    })
});
router.get('/getAllSenAlign', (req, res) => {
    var option = {
        offset: parseInt(req.query.p),
        limit: parseInt(req.query.c),
    };
    var alignments = senAlignRepo.loadAll(option);
    var counter = senAlignRepo.count();
    Promise.all([alignments, counter]).then(([pAlign, countRows]) => {
        var count = parseInt(countRows[0].total);
        res.json({
            total: count,
            data: pAlign
        });
    },function (err) {
        res.json({
            code: 200,
            message: "Error"
        });
    });
});
router.get('/getSenAlign', (req, res) => {
    var id = parseInt(req.query.id);
    senAlignRepo.loadOne(id).then(function (data) {
        res.json(data);
    },function (err) {
        res.json({message: err});
    })
});

router.post('/addSen', (req, res) => {
    var obj = req.body;
    console.log(obj);
    var value = [obj.lang1, obj.lang2, obj.scope, 1];
    senAlignRepo.addRow(value).then(function () {
        res.json({
            code: 200,
            message: 'Thành công',
        });
    },function (err) {
        res.json({
            code: 400,
            message: 'Thất bại',
        });
    })
});
router.put('/updateSen', (req, res) => {
    var obj = req.body;
    senAlignRepo.updateRow(obj).then(function () {
        res.json({
            code: 200,
            message: 'Update oke',
        });
    },function (err) {
        res.json({
            code: 400,
            message: 'Thất bại',
        });
    })
});

router.delete('/deleteSen', (req, res) => {
    var id = req.query.id;
    console.log(id);
    senAlignRepo.deleteRow(id).then(function (data) {
        console.log(data);
        res.json({
            code: 200,
            message: 'DElete oke',
        });
    },function (err) {
        res.json({
            code: 400,
            message: 'Thất bại',
        });
    })
});
router.delete('/deleteMultiSen', (req, res) => {
    // var id = req.params.id;
    var ids = '(603,604)';
    senAlignRepo.deleteMulti(ids).then(function () {
        res.json({
            code: 200,
            message: 'Thành công',
        });
    },function (err) {
        res.json({
            code: 400,
            message: 'Thất bại',
        });
    })
});

module.exports = router;