const mongoose=require("mongoose")

const orderdetails= new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },
    

})

const OrderdetailsModels= new mongoose.model("Orders",orderdetails)

module.exports=OrderdetailsModels