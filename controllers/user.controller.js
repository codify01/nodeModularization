const userModel = require('../models/user.model')

const userProfile = (req,res)=>{
        res.send('welcome')
}
const signin = (req,res)=>{
        res.send('welcome to signin')
}
const signup = (req,res)=>{
        res.send('welcome to signup')
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

     const {fullName, password, email} = req.body
    let user = new userModel({fullName:fullName, password:password, email:email})
    user.save()
    .then(
        (response)=>{
            console.log(response);
            console.log('success');
            res.status(200).send('User saved')
        }
    ).catch(
        (err)=>{
            console.log(err);
            res.status(400).send('user not saved')
        }
    )
}




module.exports = {userProfile, regiterUser,loginUser,signin,signup}