const express = require('express')
const router = express.Router()
const { addBus, availableBuses } = require('../controllers/ticketController')

router.post('/bus', addBus)
router.get('/bus', availableBuses)

module.exports = router