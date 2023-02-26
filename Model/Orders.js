const mongoose  = require("mongoose"); 
const Schema = mongoose.Schema;
const Orders = new Schema({
    user_id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    surname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    products:{
        type:Object,
        require:true
    },
    isSend:{
        type:Boolean,
        require:true
    }
},{timestamps:true})

const orders = mongoose.model("Orders",Orders);
module.exports = {orders}