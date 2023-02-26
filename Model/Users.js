const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
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
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        require:true
    }
},{timestamps:true})

const users = mongoose.model("Users",Users);

module.exports = {users}