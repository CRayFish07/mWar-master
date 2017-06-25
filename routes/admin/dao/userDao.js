/**
 * project mWar-master
 * author 迟新
 * time 2017/6/22.
 * email shankejiazu@126.com
 */
var db = require(process.cwd()+'/routes/mysql-pool.js');

exports.queryUser = function(data, callback) {
    var sql = ' SELECT id, '+
              ' username, '+
              ' nickname, '+
              ' PASSWORD, '+
              ' iphone, '+
              ' email, '+
              ' age, '+
              ' sex, '+
              ' mark FROM admin_user';
    // get a connection from the pool
    db.jdbc(sql,function (err,results) {
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};