/**
 * project mWar-master
 * author 迟新
 * time 2017/6/21.
 * email shankejiazu@126.com
 */
var express = require('express');
var router = express.Router();
var userServer = require('../server/userServer.js');

/* GET userList page. */
router.get('/list', function(req, res, next) {
    userServer.queryUser("data",function (err, results) {
        if(err.length > 0){
            return err;
        }
        return res.render('admin/user/userList',{items:results});
    });
});
module.exports = router;

