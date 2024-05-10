const express= require('express')
const router= express.Router();
const fooddetails= require("../Models/fooddetails")

router.get("/fooddetails",async(req,res)=>{
try{
    const response= await fooddetails.find({})
    return res.json({response})
}
catch{
    console.log("error")
    return res.json({massege:error})

}
})
module.exports=router