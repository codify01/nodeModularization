const express = require("express")
const { regiterUser, loginUser, userProfile } = require("../controllers/user.controller")
const router = express.Router()


router.get("/dashboard", userProfile)
router.post("/login", loginUser)
router.post("/register", regiterUser)




module.exports = router