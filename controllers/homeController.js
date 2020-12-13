var express = require('express');
var restrict = require('../middle-wares/restrict');
var homeRepo = require('../repos/homeRepo');
var router = express.Router();

router.get('/login', (req, res) => {
    res.redirect('/home');
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