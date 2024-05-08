const express = require('express')
const router = express.Router()
const { addBus, updateBusSeat, availableBuses} = require('../controllers/ticketController')

router.route('/bus').post(addBus).get(availableBuses)
router.patch('/:id', updateBusSeat)

module.exports = router