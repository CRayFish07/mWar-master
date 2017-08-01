mWar
创建时间2017年6月12日
#创建过程
>创建过程  
>1.$ npm install express-generator -g 通过express创建骨架 <br/>
>2.$ express myapp<br/>
>3.$ npm install 安装所有依赖包<br/>
>4.http://localhost:3000/ 启动
#ejs语法
>1.用<%...%>包含js代码<br/>
>2.用<%=...%>输出变量 变量若包含 '<' '>' '&'等字符 会被转义<br/>
>3.用<%-...%>输出变量 不转义<br/>
>4.用<%- include('user/show') %>引入其他模板 包含 ./user/show.ejs<br/>
>5.用<%# some comments %>来注释，不执行不输出<br/>
>6.<%% 转义为 '<%'<br/>
>7.<% ... -%> 删除新的空白行模式?<br/>
>8.<%_ ... _%> 删除空白符模式
>9.支持include  <% include common/head.html %> 利于模块整理


#forever的用法：
npm install forever -gd
>使用forever启动守护进程：forever start your_app.js<br/>
>关闭守护进程：forever stop your_app.js<br/>
>重启守护进程：：forever restart your_app.js<br/>
>如果需要记录输出日志和错误：forever start -l forever.log -o out.log -e err.log your_app.js<br/>
>查看正在运行的程序：forever list<br/>

#占位图
>http://placeholder.cn/820x200

#加入express-session
>npm install --save express-session session-file-store

#加入async控制异步
>npm install async

#日期格式化问题
>采用Moment.js

#遗留问题
>1，分页部分代码逻辑有问题，需要精简。


#2017年8月1日
>最近事情比较多，没有做太多的更新。
>role表增删改查以增加，但是并没有增加新技术性的东西，只是做了一些修修补补。<br/>
>在热心的同学帮助下修改了命名错误、数据库错误等等。
>https://cnodejs.org/topic/59683571e8bd37e825ba9366  这个是我的帖子地址 欢迎大家给提意见，互相沟通学习
>下一步工作内容 研究Promise 替换下 async 并在menu功能中使用 ；
>进行首页数据库读取、查看服务器状态（图表）、首页用户发表文章（最后实现）<br/>

