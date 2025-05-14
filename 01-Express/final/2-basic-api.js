const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    const data = {name:'Mangal',age:30};
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);