

const http=require('http');
const mydata=require('./myData');
const { json } = require('stream/consumers');

// http.createServer((request, response)=>{
// response.writeHead(200,{'Content-Type':'text/html'})
//  response.write("Hello, I'm Learning Nods Js");
// response.end();

// }).listen(1000)


// const response=(request, response)=>{
//     response.writeHead(200,{'Content-Type':'text/html'}); // data render as an html
//      response.write("Hello, I'm Learning Nods Js  completely");
//     response.end();
    
//     }

// http.createServer(response).listen(1000);


//*******  Create api using node js with static data  *******

http.createServer((request, response)=>{


    response.writeHead(200,{'Content-Type':'application/json'}) ;


    //stringify used to convert the data into JSON Format
    
    
    // response.write(JSON.stringify(
    //     {name:"hira", dep:"IT"}
    // ));

    response.write(JSON.stringify(
        mydata
    ));
    response.end();

}).listen(1000)


