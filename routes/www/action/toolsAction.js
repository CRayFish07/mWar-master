/**
 * project mWar-master
 * author 迟新
 * time 2017/6/12.
 * email shankejiazu@126.com
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('www/tools/list.html', {title:'午饭订餐列表'});
});

module.exports = router;

