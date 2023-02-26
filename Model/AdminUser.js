const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const adminuser = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})

const AdminUser = mongoose.model("adminuser",adminuser);

module.exports = {AdminUser}