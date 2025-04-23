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


AdminRouter.post("/getNeededHospitals",async(req,res) => {
    try{
        const allHospitals = await admin.find({})

        const needyHospitals = allHospitals.filter((hos) => {
            return hos.availableBloodGroup.includes(req.body.BloodType)
        })

        res.json(needyHospitals)
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"})
    }
})

module.exports = AdminRouter