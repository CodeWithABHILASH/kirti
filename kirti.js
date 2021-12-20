const express =require('express');
const app= express();
const path=require('path')


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.get("/greet",(req,res)=>{
    res.render("greet");
    
})
app.listen(3000,()=>{
console.log("Server");
})