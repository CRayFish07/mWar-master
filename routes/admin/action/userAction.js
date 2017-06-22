/**
 * project mWar-master
 * author 迟新
 * time 2017/6/21.
 * email shankejiazu@126.com
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
    res.render('admin/user/list', {title:'用户列表'});
});

module.exports = router;

