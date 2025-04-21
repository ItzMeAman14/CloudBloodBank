const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    bloodGroup:{
        type:String,
        required:true
    },
    phone:Number,
    gender:String,
    Address:String
})

module.exports = userSchema