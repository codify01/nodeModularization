const express = require("express")
const { regiterUser, loginUser, userProfile, signup, signin } = require("../controllers/user.controller")
const router = express.Router()


router.get("/dashboard", userProfile)
router.get("/signup", signup)
router.get("/signin", signin)
router.post("/login", loginUser)
router.post("/register", regiterUser)




module.exports = router