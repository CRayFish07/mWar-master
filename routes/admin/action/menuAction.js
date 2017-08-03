/**
 * project mWar-master
 * author 迟新
 * time 2017/8/3.
 * email shankejiazu@126.com
 */

var express = require('express');
var router = express.Router();
var menuService = require('../service/menuService');

/* GET login page. */
router.all('/list', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    menuService.queryMenu(req.body , function (err,results) {
        if(err){
            return res.json({err:0});
        }
        return res.render('admin/menu/menu',{items:results,totalRow:100,pageSize:1,pageNumber:1,totalPages:1});
    })
});

module.exports = router;