var express = require('express');
var restrict = require('../middle-wares/restrict');
var alignRepo = require('../repos/alignRepo');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('alignment/index');

});


router.post('/add', (req, res) => {
    var value = req.body.value;
    alignRepo.addMultiple(value).then(function () {
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
router.get('/all-data', (req, res) => {
    // var value = [['abc','evs',0.8,1],['abc','evs',0.3,2],['abc','evs',0.5,4]];
    console.log(req.query);

    var option = {
        offset: parseInt(req.query.p),
        limit: parseInt(req.query.c),
    };
    var alignments = alignRepo.loadAll(option);
    var counter = alignRepo.count();
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
router.get('/allDraft', (req, res) => {
    console.log(req.query);
    var option = {
        offset: parseInt(req.query.p),
        limit: parseInt(req.query.c),
    };
    var alignments = alignRepo.loadDraftSentences(option);
    var counter = alignRepo.count();
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

router.post('/addRow', (req, res) => {
    var obj = req.body;
    var editor_id = 1;

    var value = [obj.viText, obj.kmText, obj.scope, 1,editor_id,null,obj.id];
    alignRepo.addRow(value).then(function () {
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
router.put('/updateStatus', (req, res) => {
    var obj = req.body;
    alignRepo.updateStatus(obj).then(function () {
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


router.put('/updateStatus', (req, res) => {
    var obj = req.body;
    alignRepo.updateRate(obj).then(function () {
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

router.put('/sortDelete', (req, res) => {
    var obj = req.body;
    alignRepo.updateStatus(obj).then(function () {
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

router.put('/checkRow', (req, res) => {

    var id = req.query.id;
    alignRepo.isChecked(id).then(function () {
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

router.post('/saveManySentences', (req, res) => {
    var data = req.body.data;
    console.log(data);
    var ids = `(`;
    if(data){
        data.forEach(function (item) {
            ids = ids + item.id+',';
        })
    }
    ids = ids.substring(0,ids.length-1);
    ids += ')';
    console.log(ids);
    alignRepo.saveAll(ids).then(function () {
        res.json({
            code: 200,
            message: 'Save oke',
        });
    },function (err) {
        res.json({
            code: 400,
            message: 'Thất bại',
        });
    })
});


router.get('/getAlign', (req, res) => {
    var id = parseInt(req.query.id);
    alignRepo.loadOne(id).then(function (data) {
        res.json({
            code: 200,
            data: data
        });
    },function (err) {
        res.json({message: err});
    })
});

router.delete('/deleteRow', (req, res) => {
    var id = req.query.id;
    alignRepo.deleteRow(id).then(function () {
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
router.delete('/deleteMulti', (req, res) => {
    // var id = req.params.id;
    var ids = '(603,604)';
    alignRepo.deleteMulti(ids).then(function () {
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