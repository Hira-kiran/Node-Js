

const express=require('express');
const path=require('path')

const app=express();

const public =path.join(__dirname, 'public');



app.get("/home",(req, res)=>{

    res.sendFile(`${public}/home.html`); 
})
app.get("/ContactUs",(req, res)=>{

    res.sendFile(`${public}/ContactUs.html`); 
})

// we use (*) for page not found when there is no page matched
app.get("*",(req, res)=>{

    res.sendFile(`${public}/pageNotFound.html`); 
})
app.listen(2000), ()=>{
    console.log("Server running successfully");
};