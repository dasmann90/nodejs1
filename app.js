const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>Hello, This is Mangal Das.</h1>");
    res.end();
}).listen(5000);