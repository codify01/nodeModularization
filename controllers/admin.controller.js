const userModel = require("../models/user.model")




const adminDashboard = (req,res)=>{
    userModel.find()
    .then((data)=>{
        res.send({message:data,status:true})
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"error",status:false})
    })
}




module.exports = {adminDashboard}