const express = require('express');
const app = require('express');
app.listen(3000, function(){
    console.log("API está online")
});
app.get("/",function(req,res){
    res.status(200).send("deu certo")
})