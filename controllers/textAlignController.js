var express = require('express');
var restrict = require('../middle-wares/restrict');
var textAlignRepo = require('../repos/textAlignRepo');
var router = express.Router();
var readline = require('readline');
var fs = require('fs');
const path = require('path');
router.post('/writeToFile', (req, res) => {
    var viText = req.body.viText;
    var kmText = req.body.kmText;
    fs.writeFile('./public/txt/vi_test.txt', viText, (err) => {
        if (err) throw err;

        fs.writeFile('./public/txt/out_km1.txt', kmText, (err) => {
            if (err) {
                res.json({
                    code: 400,
                    message: 'Error'
                });
            }

            var promise = new Promise(function (resolve, reject) {

                var data = [];
                var idx = 0;
                let rl = readline.createInterface({
                    input: fs.createReadStream('./public/txt/out_text.txt', 'utf8'),
                    console: false
                });
                rl.on('line', function (line, lineCount, byteCount) {
                    console.log(line)

                    data.push(parseFloat(line));
                    idx++;
                })
                    .on('close', function () {
                        var json = JSON.stringify(data);
                        resolve(data); // resolve(json); may be??
                    })
                    .on('error', function (e) {
                        console.log("error", e);
                    });
            });

            promise.then((resolveResult) => {
                console.log(resolveResult[0]);
                if (resolveResult[0]){
                    var score = resolveResult[0];
                    // res.json({
                    //     lang1: viText,
                    //     lang2: kmText,
                    //     score: score,
                    //     user_id: 1
                    // })
                    var value = [viText, kmText, score, 1];
                    textAlignRepo.addRow(value).then(function () {
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
                }
            });

        });
    });


});

router.get('/readFile', (req, res) => {

    var promise = new Promise(function (resolve, reject) {

        var data = [];
        var idx = 0;
        let rl = readline.createInterface({
            input: fs.createReadStream('./public/txt/out_text.txt', 'utf8'),
            console: false
        });
        rl.on('line', function (line, lineCount, byteCount) {
            console.log(line)

            data.push(parseFloat(line));
            idx++;
        })
            .on('close', function () {
                var json = JSON.stringify(data);
                resolve(data); // resolve(json); may be??
            })
            .on('error', function (e) {
                console.log("error", e);
            });
    });

    promise.then((resolveResult) => {
        console.log(resolveResult[0]);
        if (resolveResult[0]){
            var score = resolveResult[0];
            res.json({
                code: 200,
                message: "Thành công"
            });
        }
    });


});


router.post('/addMultiple', (req, res) => {
    console.log(req.body.value);
    var value = req.body.value;
    textAlignRepo.addMultiple(value).then(function () {
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

    textAlignRepo.copyItem(text).then(function () {
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
router.get('/getAllTextAlign', (req, res) => {
    var option = {
        offset: parseInt(req.query.p),
        limit: parseInt(req.query.c),
    };
    var alignments = textAlignRepo.loadAll(option);
    var counter = textAlignRepo.count();
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
router.get('/getTextAlign', (req, res) => {
    var id = parseInt(req.query.id);
    textAlignRepo.loadOne(id).then(function (data) {
        res.json({
            code: 200,
            data: data
        });
    },function (err) {
        res.json({message: err});
    })
});

router.post('/addText', (req, res) => {
    var obj = req.body;
    console.log(obj);
    var value = [obj.lang1, obj.lang2, obj.scope, 1];
    textAlignRepo.addRow(value).then(function () {
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
router.put('/updateText', (req, res) => {
    var obj = req.body;
    textAlignRepo.updateRow(obj).then(function () {
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

router.delete('/deleteText', (req, res) => {
    var id = req.query.id;
    console.log(id);
    textAlignRepo.deleteRow(id).then(function (data) {
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
router.delete('/deleteMultiText', (req, res) => {
    // var id = req.params.id;
    var ids = '(603,604)';
    textAlignRepo.deleteMulti(ids).then(function () {
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