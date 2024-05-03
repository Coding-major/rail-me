const express = require("express")
const router = express.Router()
const { register } = require('../controllers/auth')

router.post("/login", register)

module.exports = router