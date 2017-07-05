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

exports.uuid = function () {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23];

    var uuid = s.join("");
    return uuid;
};
