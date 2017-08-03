/**
 * project mWar-master
 * author 迟新
 * time 2017/6/20.
 * email shankejiazu@126.com
 */
var express = require('express');
var router = express.Router();
var loginServer = require('../service/loginService.js');


/* GET home page. */
router.all('/', function(req, res, next) {
    res.render('admin/login', {title:'后台管理登入'});
});


module.exports = router;

