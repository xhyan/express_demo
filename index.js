var express = require('express');
var app = express();

//���徲̬Ŀ¼
app.use(express.static(_dirname + "/public"));
//����8080�˿�
app.listen(8080);