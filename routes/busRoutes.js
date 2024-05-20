const express = require('express')
const router = express.Router()
const { createSeat, deleteSeat } = require('../controllers/seatContoller')

router.route('/buses/:busId/seats').post(createSeat).delete(deleteSeat)

module.exports = router