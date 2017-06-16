var express = require('express');
var router = express.Router();

router.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    /*next(); // pass control to the next handler*/
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile('./views/index.html',function () {
        console.log('11111111111111');
    });
});


/* POST users listing. */
router.post('/',function (req,res) {
    res.send('post 请求')
});
module.exports = router;


// 匹配 /about 路径的请求
router.get('/about', function (req, res) {
    res.send('about');
});

// 匹配 /random.text 路径的请求
router.get('/random.text', function (req, res) {
    res.send('random.text');
});


// 匹配 acd 和 abcd
router.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
});

// 匹配 abcd、abbcd、abbbcd等
router.get('/ab+cd', function(req, res) {
    res.send('ab+cd');
});

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
router.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
});

// 匹配 /abe 和 /abcde
router.get('/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});







var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function (req, res) {
    res.send('Hello from C!');
}

router.get('/example/c', [cb0, cb1, cb2]);

