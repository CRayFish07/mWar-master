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
forever的安装：

#forever的用法：
>使用forever启动守护进程：forever start your_app.js<br/>
>关闭守护进程：forever stop your_app.js<br/>
>重启守护进程：：forever restart your_app.js<br/>
>如果需要记录输出日志和错误：forever start -l forever.log -o out.log -e err.log your_app.js<br/>
>查看正在运行的程序：forever list<br/>