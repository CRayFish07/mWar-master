/**
 * project mWar-master
 * author 迟新
 * time 2017/8/3.
 * email shankejiazu@126.com
 */

const express = require('express');
const router = express.Router();
const menuService = require('../service/menuService');
const Q = require('q');
const pageConfig = require(process.cwd()+'/page-config');
const page = pageConfig.page;


/* GET login page. */
router.all('/list', function(req, res, next) {
    //虽然可以用callback调用层叠，但是代码不清晰。
    if (!req.body) return res.sendStatus(400);
    page.number = req.body.pageNumber != undefined ? req.body.pageNumber : page.number;
    Q.promise(function (resolve, reject) {
        menuService.queryMenuCount(function (err,result) {
            if(err){
                return reject(err);
            }
            page.totalRow=result[0].totalRow;
            page.totalNumber = Math.ceil(page.totalRow/page.size);
            var data = "LIMIT "+((page.number-1)*page.size)+","+page.size+"";
            return resolve(data);
        });
    }).then(function (data) {
        menuService.queryMenu(data , function (err,results) {
            if(err){
                return res.json({err:0});
            }
            return res.render('admin/menu/menu',{items:results,page});
        });
    });
});

module.exports = router;