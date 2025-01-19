
// Router Level Middleware
const express=require('express');

const reqFilter=require('./middlewareMethod');



const app=express();




app.get("/", reqFilter, (req, res)=>{

    res.send("I'm Learning Router Level Middleware Concept"); 
})
app.get("/ContactUs",(req, res)=>{
    res.send("Welcome to contact us"); 
})

app.get("/about",(req, res)=>{
    res.send("Welcome to contact us"); 
})
app.listen(2000), ()=>{
    console.log("Server running successfully");
};