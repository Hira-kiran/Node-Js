const express=require('express');

const app=express();

// for using EJS we need to set the view engine
app.set('view engine', 'ejs');


// : mean the name and id value should be dynmaic
app.get("/about/:name/:id",(req, res)=>{


    const userInfo={
        name:req.params.name,
        id:req.params.id,
        food:["Pizza", "Burger","Pasta"]

    }
    res.render('about', {userInfo}); 
})

app.listen(2000), ()=>{
    console.log("Server running successfully");
};