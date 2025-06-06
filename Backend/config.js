const mongoose = require('mongoose')
const userSchema = require("./models/User");
const AdminSchema = require("./models/Admin");

const connect = mongoose.connect('mongodb://localhost:27017/CBB')

if(connect){
    console.log("Connection to Database Successfully")
}
else{
    console.log("Connection to Database Failed")
}

const user = mongoose.model("users",userSchema)
const admin = mongoose.model("admins",AdminSchema)

module.exports = { user, admin }
