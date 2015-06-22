var express = require('express');
var app = express();

//定义静态目录
app.use(express.static(_dirname + "/public"));
//监听8080端口
app.listen(8080);