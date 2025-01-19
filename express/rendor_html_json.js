

const express =require('express');

const myData=require('./myData')
const app =express();

app.get('',(req, res)=>{


    res.send(myData);

}).listen(2000, ()=>{

    console.log("Server running successfully")
});