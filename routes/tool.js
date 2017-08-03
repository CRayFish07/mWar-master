/**
 * project mWar-master
 * author 迟新
 * time 2017/7/6.
 * email shankejiazu@126.com
 */
const crypto =require('crypto');

//yyyy-MM-dd HH:MM:SS
exports.gettime = function() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
};


exports.md5 = function (text) {
    try {
        return crypto.createHash('md5').update(text,'utf8').digest('hex');
    } catch (err){
        console.log('md5加密错误');
    }
};
