const express = require('express')
const { adminDashboard } = require('../controllers/admin.controller')
const router = express.Router()

// router.get('/welcome', welcomeAdmin)

router.get('/dashboard', adminDashboard)




module.exports = router



