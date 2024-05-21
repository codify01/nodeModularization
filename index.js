const express = require('express')
const App = express()
const dotenv = require('dotenv')
dotenv.config()
let PORT = process.env.PORT
const mongoose = require('mongoose')
const userRouter = require('./routes/user.route')
const adminRouter = require('./routes/admin.route')
const { welcomeAdmin } = require('./controllers/admin.controller')
let URI = process.env.URI
App.use(express.urlencoded({extended: true}))
App.use('/user', userRouter)
App.use('/admin', adminRouter)










App.listen(PORT, ()=>{
    mongoose.connect(URI).then(
        ()=>{
            console.log('Connected');
            console.log('Server running on port ' + PORT);
        }
    ).catch(
        (err)=>{ 
            console.log('not connected');
            console.log(err.message);
        }
    )  
})