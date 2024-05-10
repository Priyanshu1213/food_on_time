const express= require('express')
const router= express.Router();

const Mod=require('../Models/orderdetails')

router.post("/myorderdisplay",async(req,res)=>{
    try {
        console.log(req.body.email)
        let mod = await Mod.find({ 'email': req.body.email })
        
        res.json({modd:mod})
        
        
    } catch (error) {
        res.send("Error",error.message)
    }
})
module.exports=router