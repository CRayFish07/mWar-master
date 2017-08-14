/**
 * project mWar-master
 * author 迟新
 * time 2017/7/26.
 * email shankejiazu@126.com
 */
var express = require('express');
var router = express.Router();
var roleService = require('../service/roleService.js');
const async = require('async');
const pageConfig = require(process.cwd()+'/page-config');
var page = pageConfig.page;


/* GET roleList page. */
router.all('/list', function(req, res, next) {
    page.number = req.body.pageNumber != undefined ? req.body.pageNumber : page.number;
    async.waterfall([
        function (callback) {
            roleService.queryRolePage(function (err,result) {
                if(err.length > 0){
                    return err;
                }
                page.totalRow=result[0].totalRow;
                page.totalNumber = Math.ceil(page.totalRow/page.size);
                var data = "LIMIT "+((page.number-1)*page.size)+","+page.size+"";
                callback(null,data);
            });
        },function (data) {
            roleService.queryRole(data,function (err, results) {
                if(err.length > 0){
                    return err;
                }
                return res.render('admin/role/role',{items:results,page});
            });
        }
    ]);
});

router.get('/read', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    roleService.queryRoleById(req.query,function (err, results) {
        if(err.length > 0){
            return err;
        }
        return res.render('admin/role/role_read',{item : results});
    });
});

router.get('/addPage', function(req, res, next) {
    return res.render('admin/role/role_add');
});

router.post('/add', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    roleService.addRole(req.body,function (err, results) {
        if(err.length > 0){
            return err;
        }
    });
    return res.redirect('/admin/role/list');
});
router.get('/editPage', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    roleService.queryRoleById(req.query,function (err, results) {
        if(err.length > 0){
            return err;
        }
        return res.render('admin/role/role_edit',{item : results});
    });

});

router.post('/edit', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    roleService.editRole(req.body,function (err, results) {
        if(err.length > 0){
            return err;
        }
    });
    return res.redirect('/admin/role/list');

});

router.get('/delete', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    roleService.deleteRoleById(req.query,function (err, results) {
        if(err.length > 0){
            return err;
        }
    });
    return res.redirect('/admin/role/list');

});
module.exports = router;

