/**
 * project mWar-master
 * author 迟新
 * time 2017/8/3.
 * email shankejiazu@126.com
 */
var menuDao = require('../dao/menuDao.js');

//查询用户
exports.queryMenu = function(data, callback){
    menuDao.queryMenu(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};