/**
 * project mWar-master
 * author 迟新
 * time 2017/6/22.
 * email shankejiazu@126.com
 */
var db = require(process.cwd()+'/routes/mysql-pool.js');
var tool = require(process.cwd()+'/routes/tool.js');

exports.queryUserPage = function(callback) {
    var sql = ' SELECT COUNT(*) totalRow FROM admin_user ';
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.queryUser = function(data, callback) {
    var sql = " SELECT id, username,nickname,PASSWORD,iphone, " +
        "email,age, sex,mark FROM admin_user " +
        "ORDER BY DATE DESC ,updatetime DESC " + data;
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.addUser = function(data, callback) {
    var sql = 'INSERT INTO admin_user (id,username,nickname,PASSWORD,iphone,email,age,sex,mark,date) '+
        ' VALUES (\''+db.uuid()+'\',\''+data.username+'\',\''+data.nickname+'\',\''+tool.md5(data.password)+'\',' +
        '\''+data.iphone+'\',\''+data.email+'\','+data.age+',\''+data.sex+'\',\''+data.mark+'\',' +
        '\''+tool.gettime()+'\')';
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.queryUserById = function(data, callback) {
    var sql = " SELECT id,username,nickname,password,iphone,email,age,sex,mark FROM admin_user WHERE id = '"+data.id+"'  ";
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.editUser = function(data, callback) {
    var sql =" UPDATE admin_user SET username = '"+data.username+"' ,nickname = '"+data.nickname+"' ,PASSWORD = '"+data.password+"' ,iphone = '"+data.iphone+"' ," +
             " email = '"+data.email+"' ,age = '"+data.age+"' ,sex = '"+data.sex+"' ,mark = '"+data.mark+"'" +
             " , updatetime = '"+tool.gettime()+"' WHERE id = '"+data.id+"' ";
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

exports.deleteUserById = function(data, callback) {
    var sql = " delete FROM admin_user WHERE id = '"+data.id+"'  ";
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};