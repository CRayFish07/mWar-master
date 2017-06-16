var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var deviceAgent = req.headers['user-agent'].toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if(agentID){
        res.render('mobile/index', { title: '指到移动网页' });
    }else{
        res.redirect('/index');
    }
});

module.exports = router;
