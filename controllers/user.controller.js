const userModel = require('../models/user.model')

const userProfile = (req,res)=>{
        res.send('welcome')
}



const loginUser = (req,res)=>{
    console.log('working');
    console.log(req.body.email);
    userModel.findOne({email:req.body.email})
    .then((result)=>{
        console.log('Result:',result  );
        if(result.password === req.body.password){
            console.log('logging in');
        }else {
            res.send(
                {
                    message:'Invalid Password'
                }
            )
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}
const regiterUser = (req,res)=>{
    console.log('I am working');
    let user = new userModel(req.body)
    user.save().then(
        (response)=>{
            console.log(response);
            console.log('success');
            // res.redirect("/signin")
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
}




module.exports = {userProfile, regiterUser,loginUser}