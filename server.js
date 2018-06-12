/**
 * Created by jiaoge on 2018/4/19.
 */

var http = require('http');
var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : '47.93.185.82',
    user     : 'root',
    password : 'll201240311',
    database: 'BYJ'

});

connection.connect();


var  sql = 'SELECT * FROM User';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});
http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');