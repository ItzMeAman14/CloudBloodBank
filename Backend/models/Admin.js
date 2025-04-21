const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    availableBloodGroup:{
        type:Array
    },
    licenseNumber:String,
    HelplineNumber:Number,
    ContactPersonName:String,
    Type:String,
    RegistrationDate:Date,
    Address:String
})

module.exports = userSchema