/**
 * project mWar-master
 * author 迟新
 * time 2017/6/12.
 * email shankejiazu@126.com
 */
//查询top模块
var roleDao = require('../dao/roleDao.js');

//查询用户分页
exports.queryRolePage = function(callback){
    roleDao.queryRolePage(function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};
//查询用户
exports.queryRole = function(data, callback){
    roleDao.queryRole(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.addRole = function(data, callback){
    roleDao.addRole(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.queryRoleById = function(data, callback){
    roleDao.queryRoleById(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.editRole = function(data, callback){
    roleDao.editRole(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};
exports.deleteRoleById = function(data, callback){
    roleDao.deleteRoleById(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};