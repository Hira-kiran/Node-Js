const { name } = require('ejs');
const express=require('express');

const app=express();

// for using EJS we need to set the view engine

app.set('view engine', 'ejs');
app.get('/welcome', (req, res)=>{

    const myInfo={
        name:"Hira",age:23
    }

    // Welcome is the name of EJS file that is in views
res.render("Welcome", {myInfo})
})

app.listen(3000,()=>{

    console.log("Server running successfully")
})