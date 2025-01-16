

const http=require('http');

// http.createServer((request, response)=>{
// response.writeHead(200,{'Content-Type':'text/html'})
//  response.write("Hello, I'm Learning Nods Js");
// response.end();

// }).listen(1000)


const response=(request, response)=>{
    response.writeHead(200,{'Content-Type':'text/html'})
     response.write("Hello, I'm Learning Nods Js  completely");
    response.end();
    
    }


http.createServer(response).listen(1000)