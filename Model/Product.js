const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const Products = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    }

},{timestamps:true})

const products = mongoose.model("Products",Products);

module.exports = {products}