const express=require('express');

const app=express();


// Application Level Middleware

const reqFilter=(req , res, next)=>{

    const age=req.query.age;

    if(!age){
        res.send("No age found");
    }else if(age<23){
        res.send("Hira your age is 23");
    }else{
        next(); // Actuall response py ly k jata ha, and if we do not use this, then it show us nothing, it just load the page
    }
}

app.use(reqFilter);
app.get("/",(req, res)=>{

    res.send("I'm Learning Middleware Concept"); 
})
app.get("/ContactUs",(req, res)=>{
    res.send("Welcome to contact us"); 
})


app.listen(2000), ()=>{
    console.log("Server running successfully");
};