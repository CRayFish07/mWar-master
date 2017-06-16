/**
 * project mWar-master
 * author 迟新
 * time 2017/6/13.
 * email shankejiazu@126.com
 */
var mysql       = require('mysql');
var mysqlConfig = require(process.cwd()+'/config.js');
var mysqlPool = mysql.createPool(mysqlConfig.mysql_dev);

exports.jdbc = function(sql, callback) {
    console.log("执行SQL为: " + sql);
    // get a connection from the pool
    mysqlPool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            connection.release();
            return;
        }
        // make the query
        connection.query(sql, function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
    });
};
