/**
 * project mWar-master
 * author 迟新
 * time 2017/6/12.
 * email shankejiazu@126.com
 */
var express = require('express');
var router = express.Router();
var indexService = require('../service/indexService');

/* GET login page. */
router.post('/loginAction', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    indexService.queryUser(req.body , function (err,result) {
        if(result.length == 0){
            return res.json({err:0});
        }
        req.session.user = result[0];
        return res.json({success:'登录成功！'});
    })
});

/* GET home page. */
router.get('/index', function(req, res, next) {
    console.log(req.session.user);
    if (!req.session.user) {
        return res.redirect('/admin/login');
    }
    return res.render('admin/index',{title:'后台管理首页'});
});
module.exports = router;

