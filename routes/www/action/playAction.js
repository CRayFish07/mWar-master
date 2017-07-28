/**
 * project mWar-master
 * author 迟新
 * time 2017/7/28.
 * email shankejiazu@126.com
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('www/play/element');
});

module.exports = router;
