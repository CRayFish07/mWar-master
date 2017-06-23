/**
 * project mWar-master
 * author 迟新
 * time 2017/6/12.
 * email shankejiazu@126.com
 */
var express = require('express');
var router = express.Router();
var indexServer = require('../server/indexServer.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    var data=[{id:'1'},{username:'lvbu'}];
    indexServer.queryTop(data,function (err,results) {
        res.render('www/index', {title:'文章列表',items:results});
    });
});

module.exports = router;

