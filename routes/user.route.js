const express = require("express")
const { welcomeUser } = require("../controllers/user.controller")
const router = express.Router()


router.get("/welcome", welcomeUser)



module.exports = router