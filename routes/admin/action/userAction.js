/**
 * project mWar-master
 * author 迟新
 * time 2017/6/21.
 * email shankejiazu@126.com
 */
var express = require('express');
var router = express.Router();
var userServer = require('../service/userService.js');
const async = require('async');

/* GET userList page. */
router.all('/list', function(req, res, next) {
    var totalRow = "";			//总条数
    var pageSize = 10;			//每页显示多少条
    var pageNumber = req.body.pageNumber != undefined ? req.body.pageNumber : 1;		    //当前第几页
    var totalPages ="";
    async.waterfall([
        function (callback) {
            userServer.queryUserPage(function (err,result) {
                if(err.length > 0){
                    return err;
                }
                totalRow=result[0].totalRow;
                totalPages = Math.ceil(totalRow/pageSize);		//总页数
                var data = "LIMIT "+((pageNumber-1)*pageSize)+","+pageSize+"";
                callback(null,data);
            });

        },function (data) {
            userServer.queryUser(data,function (err, results) {
                if(err.length > 0){
                    return err;
                }
                return res.render('admin/user/user',{items:results,totalRow:totalRow,pageSize:pageSize,pageNumber:pageNumber,totalPages:totalPages});
            });
        }
    ]);
});

router.get('/read', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    userServer.queryUserById(req.query,function (err, results) {
        if(err.length > 0){
            return err;
        }
        return res.render('admin/user/user_read',{item : results});
    });
});

router.get('/addPage', function(req, res, next) {
    return res.render('admin/user/user_add');
});

router.post('/add', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    userServer.addUser(req.body,function (err, results) {
        if(err.length > 0){
            return err;
        }
    });
    return res.redirect('/admin/user/list');
});
router.get('/editPage', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    userServer.queryUserById(req.query,function (err, results) {
        if(err.length > 0){
            return err;
        }
        return res.render('admin/user/user_edit',{item : results});
    });

});

router.post('/edit', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    userServer.editUser(req.body,function (err, results) {
        if(err.length > 0){
            return err;
        }
    });
    return res.redirect('/admin/user/list');

});

router.get('/delete', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    userServer.deleteUserById(req.query,function (err, results) {
        if(err.length > 0){
            return err;
        }
    });
    return res.redirect('/admin/user/list');

});
module.exports = router;

