/**
 * project mWar-master
 * author 迟新
 * time 2017/6/12.
 * email shankejiazu@126.com
 */
//查询top模块
var userDao = require('../dao/userDao.js');

//查询用户
exports.queryUser = function(data, callback){
    userDao.queryUser(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.addUser = function(data, callback){
    userDao.addUser(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.queryUserById = function(data, callback){
    userDao.queryUserById(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

