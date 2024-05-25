const mongoose = require('mongoose')

userSchema = mongoose.Schema(
    {
        fullName: {type:String, required:true, },
        email: {type:String, required:true, unique:true},
        password: {type:String, required:true, }
    }
)
const userModel = mongoose.model('user', userSchema)



module.exports = userModel