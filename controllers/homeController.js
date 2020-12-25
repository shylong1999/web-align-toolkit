var express = require('express');
var restrict = require('../middle-wares/restrict');
var homeRepo = require('../repos/homeRepo');
var alignRepo = require('../repos/alignRepo');
var router = express.Router();
var fs = require('fs');
const path = require('path');
const {PythonShell} = require('python-shell');
// var sleep = require('sleep');
let multer = require("multer");
let formidable = require("formidable");

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
        args: ['-s', basePath + 'vi.txt', '-t', basePath + 'km.txt', '-o', basePath + 'vi_km.txt', '-lang', 'km', '-thres', '0.6'] //An argument which can be accessed in the script using sys.argv[1]
    };


    PythonShell.run('senalign.py', options, function (err, result) {
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
        args: [basePath + 'vn.txt', basePath + 'khmer.txt', 'km'] //An argument which can be accessed in the script using sys.argv[1]
    };


    PythonShell.run('document_alignment.py', options, function (err, result) {
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

var mime = require('mime');

router.get('/dow',(req, res) => {
    var fileLocation = path.join('public/txt/out_km.txt');
    console.log(fileLocation);
    res.download(fileLocation);
});
router.post('/importFile', (req, res) => {
    let form = new formidable.IncomingForm();
    // Cấu hình thư mục sẽ chứa file trên server với hàm .uploadDir
    // form.uploadDir = "uploads/"
    console.log("alo")
    form.uploadDir = "public/txt/"
    // Xử lý upload file với hàm .parse
    form.parse(req, (err, fields, files) => {
        if (err) throw err;
        // Lấy ra đường dẫn tạm của tệp tin trên server
        let tmpPath = files.file.path;
        // Khởi tạo đường dẫn mới, mục đích để lưu file vào thư mục uploads của chúng ta
        let newPath = form.uploadDir + files.file.name;
        // Đổi tên của file tạm thành tên mới và lưu lại
        fs.rename(tmpPath, newPath, (err) => {
            if (err) throw err;
            console.log("ablo")
            console.log(files.file.type);
            switch (files.file.type) {
                // Kiểm tra nếu như là file ảnh thì render ảnh và hiển thị lên.
                case "text/plain":
                    console.log("ablo12321")

                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(files.file.name);
                    break;
                case "image/jpeg":
                    fs.readFile(newPath, (err, fileUploaded) => {
                        res.writeHead(400, {"Content-type": "image/jpeg"});
                        res.end(fileUploaded);
                    });
                    break;
                // Còn lại các loại file khác thì chỉ hiển thị nội dung thông báo upload thành công.
                default:
                    res.writeHead(400, {"Content-Type": "text/html"});
                    res.end(files.file.name);
                    break;
            }
        });
    });
});


router.get('/readFile', (req, res) => {
    var fileName = req.query.fileName;

    if(fileName)   console.log(fileName);
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
                "status": 1,
                "lang1": line.split('\t')[1],
                "lang2": line.split('\t')[2],
            }
            if (obj.lang1 && obj.lang2) {
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
        var values = [];
        if (resolveResult) {
            resolveResult.forEach(function (obj) {
                var item = [obj.lang1, obj.lang2, obj.score, obj.status, 1, 0];
                values.push(item);
            })
            // console.log(values);
            alignRepo.addMultiple(values).then(function () {
                res.json({
                    code: 200,
                    message: 'Thành công',
                });
            }, function (err) {
                res.json({
                    code: 400,
                    message: 'Error',
                });
            });
        }
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