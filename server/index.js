const express = require("express")
const app=express();
const bodyParser = require("body-parser")
const db= require("./db")
const cors= require("cors")



const corsOptions = {
    origin: ["http://localhot:3000", "https://foodwithpriyanshu.netlify.app"],
    credentials:true
  };
  
  app.use(cors(corsOptions));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept");
     next();
  })

app.get('/check',(req,res)=>{
    res.send("hello from backend")

})
// app.use(express.json())

app.use('/api',require("./Routers/Creatuser"))

app.use('/api',require("./Routers/displayMyOrder"))

app.use('/api',require("./Routers/food_details"))
app.use('/api',require("./Routers/takeOrder"))


app.listen(process.env.PORT,()=>{
    console.log("chal gya express")
})