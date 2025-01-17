

const express=require('express');

const app=express();


app.get('',(req, res)=>{

    
    const name= req.query.name;

    if(name){
        
        res.send(`Welcome ${name}`); 
    }else{
        res.send("Wellcome to contact us page");
    }

})

app.listen(2000, ()=>{

    console.log("Server running successfully")
})