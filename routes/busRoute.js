const express = require("express")
const router = express.Router()
const { 
    createBus,
    deleteBus,
    getBuses,
    getSingleBus,
    getBusSeats } = require('../controllers/busController')
const { createSeat, deleteSeat } = require('../controllers/seatContoller')

router.route("/").post(createBus).get(getBuses)
router.route('/:busId').get(getSingleBus).delete(deleteBus)
router.route('/:busId/seats').post(createSeat).get(getBusSeats).delete(deleteSeat)

module.exports = router