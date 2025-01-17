
const express=require('express');

const app=express();

app.get('', (req, res)=>{

    res.send("Hi, Hira's here");
})


app.get('/subject', (req, res)=>{

    res.send("subject");
});
app.listen(1000);