const { sequelize } = require('../connect')
const { Bus, Ticket, Seat } = require('../models/index')
const { where } = require('sequelize')
const { StatusCodes } = require('http-status-codes')
const {
    badRequest,
    customError,
    forbidden,
    notFound,
    unAuthourized
} = require("../errors/indexErrors")


const createSeat = async (req, res) => {
    const { startFrom, stopAt, numbers } = req.body
    let numbersArray = []

    if((!startFrom && !stopAt) || !numbers) {
        throw new badRequest('please provide fill the required input')
    }

    if (startFrom && stopAt) {
        for (let i = startFrom; i<=stopAt; i++) {
            numbersArray.push(i)
        }
    }

    if (numbers) {
        const stringArray = numbers.split(",")
        
        for (let i=0; i<stringArray.length; i++) {
            const integer = parseInt(stringArray[i], 10)
            if (!numbersArray.includes(integer)) {
                numbersArray.push(integer)
            }
        }
    }

    const seatPromises = numbersArray.map(async newSeat => {
        const exist = await Seat.findOne({seatNumber: newSeat})

        if ( !exist ) {
            seatObject = {}
            seatObject.seatNumber = newSeat
            seatObject.BusId = req.params.busId
            await Seat.create(seatObject)
        }
        
    } )

    await Promise.all(seatPromises)

    res.status(StatusCodes.CREATED).json({msg: "vreated"}) //////////////
    
}


const deleteSeat = async(req, res) => {
    const { seatNumber } = req.body
    if (!seatNumber) {
        throw new badRequest("please provide the seat number to delete")
    }

    const Seat = await Seat.destroy({ where: {seatNumber, BusId: req.params.busId}})

    if (!Seat) {
        throw new notFound('no seat with that number')
    }
    res.status(StatusCodes.OK).json({msg: `successfully deleted seatNumber ${seatNumber}`})
}

const seatUnavailable = async (req, res) => {
    
}
module.exports = { createSeat, deleteSeat }