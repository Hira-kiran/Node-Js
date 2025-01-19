const reqFilter=(req , res, next)=>{

    const age=req.query.age;

    if(!age){
        res.send("No age found");
    }else if(age==23){
        res.send("Hira your age is 23");
    }else{
        next(); // Actuall response py ly k jata ha, and if we do not use this, then it show us nothing, it just load the page
    }
}


module.exports=reqFilter;
