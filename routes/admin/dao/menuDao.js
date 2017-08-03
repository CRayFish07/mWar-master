/**
 * project mWar-master
 * author 迟新
 * time 2017/8/3.
 * email shankejiazu@126.com
 */
var db = require(process.cwd()+'/routes/mysql-pool.js');

exports.queryMenu = function(data, callback) {
    var sql = ' SELECT id,menuName,menuType,request,image, expand, permission, createDate, remark FROM admin_menu  LIMIT 0, 50; ';
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};