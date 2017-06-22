/**
 * project mWar-master
 * author 迟新
 * time 2017/6/20.
 * email shankejiazu@126.com
 */
var express = require('express');
var router = express.Router();
var loginServer = require('../server/loginServer.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin/login', {title:'后台管理登入'});
});

/* GET home page. */
router.post('/login', function(req, res, next) {
    var data=[{username:'admin'},{password:'123456'}];
    loginServer.queryUser(data,function (err,results) {
        console.info(results);
        res.render('admin/index', {title:'文章列表',items:results});
    });
});

module.exports = router;

