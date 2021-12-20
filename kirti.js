const express =require('express');
const res = require('express/lib/response');
const app= express();
const path=require('path')


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.get("/greet",(req,res)=>{
    res.render("greet");
    
})
app.all("*", (req,res) => {
    res.status(404).json({
        "message": "Seems you got lost"
    })
})
app.listen(process.env.PORT || 8080, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server started")
    }
})
