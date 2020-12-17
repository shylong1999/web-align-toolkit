var express = require('express');
var restrict = require('../middle-wares/restrict');
var homeRepo = require('../repos/homeRepo');
var router = express.Router();
var fs = require('fs');
const path = require('path');
// var sleep = require('sleep');
var readline = require('readline');
router.get('/login', (req, res) => {
    res.redirect('/home');
});

router.get('/callFile', (req, res) => {
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./"]);

    process.stdout.on('data', function (data) {
        res.send(data.toString());
    })

});

router.post('/writeToFile', (req, res) => {
    var viText = req.body.viText;
    var kmText = req.body.kmText;

    let lyrics = 'But still I\'m having memories of high speeds when the cops crashed\n' +
        'As I laugh, pushin the gas while my Glocks blast\n' +
        'We was young and we was dumb but we had heart';
    fs.writeFile('./public/txt/vi_test.txt', viText, (err) => {
        if (err) throw err;

        fs.writeFile('./public/txt/out_km1.txt', kmText, (err) => {
            if (err) throw err;

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
                "score": line.split('\t')[0],
                "lang1": line.split('\t')[1],
                "lang2": line.split('\t')[2],
            }
            data.push(obj);
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
        // console.log(resolveResult);
        res.json(resolveResult);
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