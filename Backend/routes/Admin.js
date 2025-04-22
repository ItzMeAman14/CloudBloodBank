const express = require("express")
const AdminRouter = express.Router()
const { admin } = require("../config")

AdminRouter.get("/getAdminData",async(req,res) => {
    try{
        const data = await admin.find({})
        res.json(data)
    }   
    catch(err){
        console.error(err)
    }
})

module.exports = AdminRouter