var express = require('express');
var restrict = require('../middle-wares/restrict');
var homeRepo = require('../repos/homeRepo');
var alignRepo = require('../repos/alignRepo');
var router = express.Router();
var fs = require('fs');
const path = require('path');
const {PythonShell} = require('python-shell');
// var sleep = require('sleep');

var readline = require('readline');
router.get('/login', (req, res) => {
    res.redirect('/home');
});

router.get('/callFile', (req, res) => {
    // var basePath = `/home/nghialuan/longut-align-toolkit/SentenceAlignment/`;
    var basePath = `/home/nghialuan/huong/KC-4.0/kc_senalign/`;
    var thres = '0.8';
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: basePath, //If you are having python_test.py script in same folder, then it's optional.
        args: ['-s', basePath+'vi.txt','-t',basePath+'km.txt','-o',basePath+'vi_km.txt','-lang','km', '-thres', '0.6'] //An argument which can be accessed in the script using sys.argv[1]
    };


    PythonShell.run('senalign.py', options, function (err, result){
        if (err) {

            console.log(err);
            res.json({
                code: 400,
                message: "Thất bại"
            });
        }
        // if (err) throw err;
        // result is an array consisting of messages collected
        //during execution of script.
        console.log('result: ', result);
        // if(result){

        // }
        res.json({
            code: 200,
            message: "Thành công"
        })
    });

});


router.get('/callTextAlign', (req, res) => {
    // var basePath = `/home/nghialuan/longut-align-toolkit/SentenceAlignment/`;
    var basePath = `/home/nghialuan/huong/textalignment/`;
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: basePath, //If you are having python_test.py script in same folder, then it's optional.
        args: [basePath+'vn.txt',basePath+'khmer.txt','km'] //An argument which can be accessed in the script using sys.argv[1]
    };


    PythonShell.run('document_alignment.py', options, function (err, result){
        if (err) {

            console.log(err);
            res.json({
                code: 400,
                message: "Thất bại"
            });
        }
        // if (err) throw err;
        // result is an array consisting of messages collected
        //during execution of script.
        console.log('result: ', result);
        // if(result){

        // }
        res.json({
            code: 200,
            message: "Thành công"
        })
    });

});



// router.post('/writeToFile', (req, res) => {
//     var viText = req.body.viText;
//     var kmText = req.body.kmText;
//     var basePath = `/home/nghialuan/longut-align-toolkit/SentenceAlignment/`;
//     fs.writeFile(basePath+'vi.txt', viText, (err) => {
//         if (err) throw err;
//
//         fs.writeFile(basePath+'km.txt', kmText, (err) => {
//             if (err) throw err;
//
//
//
//             let options = {
//                 mode: 'text',
//                 pythonOptions: ['-u'], // get print results in real-time
//                 scriptPath: basePath, //If you are having python_test.py script in same folder, then it's optional.
//                 args: ['-s', basePath+'vi.txt','-t',basePath+'km.txt','-o',basePath+'vi_km.txt','-lang','km', '-thres', '0.8'] //An argument which can be accessed in the script using sys.argv[1]
//             };
//
//
//             PythonShell.run('senalign.py', options, function (err, result){
//                 if (err) {
//                     console.log(err);
//                     res.send({
//                         code: 400,
//                         message: "Error"
//                     })
//                 }
//
//                 console.log('result: ', result);
//                 if(result){
//                     res.send({
//                         code: 200,
//                         message: "Thành công"
//                     })
//                 }
//
//             });
//
//
//         });
//     });
// });



router.post('/writeToFile', (req, res) => {
    var viText = req.body.viText;
    var kmText = req.body.kmText;

    let lyrics = 'But still I\'m having memories of high speeds when the cops crashed\n' +
        'As I laugh, pushin the gas while my Glocks blast\n' +
        'We was young and we was dumb but we had heart';
    fs.writeFile('./public/txt/vi_test.txt', viText, (err) => {
        if (err) throw err;

        fs.writeFile('./public/txt/out_km1.txt', kmText, (err) => {
            if (err) {
                res.json({
                    code: 400,
                    message: 'Error'
                });
            }

            res.json({
                code: 200,
                message: 'OK'
            });

        });
    });


});


router.get('/readFile', (req, res) => {

    var promise = new Promise(function (resolve, reject) {

        var data = [];
        var idx = 0;
        let rl = readline.createInterface({
            input: fs.createReadStream('./public/txt/myfile.txt', 'utf8'),
            console: false
        });
        rl.on('line', function (line, lineCount, byteCount) {
            var obj = {
                "line": idx,
                "lang": 'vi-km',
                "score": (parseFloat(line.split('\t')[0]) * 100).toFixed(2),
                "lang1": line.split('\t')[1],
                "lang2": line.split('\t')[2],
            }
            if (obj.score > 0.8 && obj.lang1 && obj.lang2){
                data.push(obj);
                idx++;
            }

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
        // console.log(resolveResult);
        var values = [];
        if (resolveResult){
            resolveResult.forEach(function (obj) {
                var item = [obj.lang1,obj.lang2,obj.score,1];
                values.push(item);
            })
            alignRepo.addMultiple(values).then(function () {
                res.json({
                    code: 200,
                    message: 'Thành công',
                });
            },function (err) {
                res.json({
                    code: 400,
                    message: 'Error',
                });
            });
        }
        // var value = [obj.lang1, obj.lang2, obj.scope, 1];

    });
});

router.post('/login', (req, res) => {
    var user = {
        username: req.body.username,
        password: req.body.password
    };
    console.log(user);
    homeRepo.login(user).then(rows => {
        console.log(rows);
        if (rows.length > 0) {
            req.session.isLogged = true;
            req.session.user = rows[0];
            req.session.cart = [];
            res.redirect('/home');
            // res.json({
            //     code: 200,
            //     message: 'Đăng nhập thành công'
            // })

        } else {
            var vm = {

                showError: true,
                errorMsg: 'Login failed'
            };
            res.json(vm);
            // ('/error', vm);
        }
    });


});

module.exports = router;