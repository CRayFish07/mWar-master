/**
 * project mWar-master
 * author 迟新
 * time 2017/6/12.
 * email shankejiazu@126.com
 */
//查询top模块
var indexDao = require('../dao/indexDao.js');

//查询用户
exports.queryTop = function(data, callback){
    indexDao.queryTop(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};
