const express=require("express");
const { resourceUsage } = require("process");
const app=express();
app.get("/",function(req,res){
    res.send(4+2);
})
app.listen(3000);