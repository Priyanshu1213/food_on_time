
require("dotenv").config();
const mongoose= require("mongoose")
// const punycode = require('punycode');


const url=process.env.DB;

mongoose.connect(url,{})
const connection=mongoose.connection
connection.on("error",()=>{
    console.log("glti hai ")
})
connection.on("connected",()=>{
    console.log("chal gya mongo")
})

module.exports=mongoose