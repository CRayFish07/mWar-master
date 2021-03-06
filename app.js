var express = require('express');//加载express模块
var path = require('path');//路径模块
var favicon = require('serve-favicon');//请求网页的logo
var logger = require('morgan');//在控制台中，显示req请求的信息
var cookieParser = require('cookie-parser');//这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
var bodyParser = require('body-parser');//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var ejs = require('ejs');
var session = require('express-session');

var index = require('./routes/index');
var login = require('./routes/login');
var users = require('./routes/users');

//www路由
var windex = require('./routes/www/action/indexAction');
var wtools = require('./routes/www/action/toolsAction');
var wplay = require('./routes/www/action/playAction');

//admin路由
var adminIndex = require('./routes/admin/action/indexAction');
var adminLogin = require('./routes/admin/action/loginAction');
var adminUser = require('./routes/admin/action/userAction.js');
var adminRole = require('./routes/admin/action/roleAction.js');
var adminMenu = require('./routes/admin/action/menuAction.js');

//载入全局变量(未采用此方法，此方法为初始化载入内存)
//global.gConfig  = require('./page-config');

var app = express();

// view engine setup 视图引擎设置
app.engine('html',ejs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
    //console.log('Time:', Date.now());
    next();
});

// 载入中间件
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: 'mWar',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1800000 }
}));

app.use('/admin', function (req, res, next) {
    var url = req.originalUrl;
    if(!req.session.user && url.indexOf("login") == -1){
        res.redirect("/admin/login");
        return;
    }
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login', login);

//www
app.use('/index', windex);
app.use('/tools', wtools);
app.use('/play', wplay);

//admin
app.use('/admin', adminIndex);
app.use('/admin/login', adminLogin);
app.use('/admin/user', adminUser);
app.use('/admin/role', adminRole);
app.use('/admin/menu', adminMenu);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
