/**
 * project mWar-master
 * author 迟新
 * time 2017/7/26.
 * email shankejiazu@126.com
 */
var db = require(process.cwd()+'/routes/mysql-pool.js');
var tool = require(process.cwd()+'/routes/tool.js');

exports.queryRolePage = function(callback) {
    var sql = ' SELECT COUNT(*) totalRow FROM admin_role ';
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.queryRole = function(data, callback) {
    var sql = " SELECT id, roleName,enabled,createDate FROM admin_role " +
              " ORDER BY createDate DESC ,roleName DESC " + data;
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.addRole = function(data, callback) {
    var sql = 'INSERT INTO admin_role (id, roleName,enabled,createDate) '+
        ' VALUES (\''+db.uuid()+'\',\''+data.roleName+'\',\''+data.enabled+'\', \''+tool.gettime()+'\')';
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.queryRoleById = function(data, callback) {
    var sql = " SELECT id, roleName,enabled,createDate FROM admin_role WHERE id = '"+data.id+"'  ";
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.editRole = function(data, callback) {
    var sql =" UPDATE admin_role SET roleName = '"+data.roleName+"' ,enabled = '"+data.enabled+"'," +
             " createDate = '"+tool.gettime()+"' WHERE id = '"+data.id+"' ";
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.deleteRoleById = function(data, callback) {
    var sql = " delete FROM admin_role WHERE id = '"+data.id+"'  ";
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};