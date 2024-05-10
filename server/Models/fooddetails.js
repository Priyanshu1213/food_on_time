const mongoose=require("mongoose")

const fooddetails= new mongoose.Schema({
    foodname:{type:String,
    required:true
    },
    foodprice:{type:Number,
        required:true
    },
    foodcategary:{type:String,
        required:true
    },
    foodrating:{type:Number,
        required:true
    },
    foodimg:{type:String,
        required:true
    },
    foodquantity:{type:Number,
        required:true
    },
    fooddiscription:{type:String,
        required:true
    }

})

const fooddetailsModels= new mongoose.model("Food_Items",fooddetails)

module.exports=fooddetailsModels

