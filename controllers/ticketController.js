const Ticket = require('../models/ticketModel')
const Bus = require("../models/busModel")
const SeatNumber = require('../models/seatNumber')

const addBus = async (req, res) => {
    const { name } = req.body
}


const updateBusSeat = async (req, res) => {
    const { startFrom, stopAt, Numbers } = req.body
    const stringArray = Numbers.split(",")
    let numbersArray = []
    const existingNumbers = await SeatNumber.findAll()

    if (startFrom && stopAt) {
        for (let i = startFrom; i<=stopAt; i++) {
            numbersArray.push(i)
        }
    }
    if (Numbers) {
        for (let i=0; i<stringArray.length; i++) {
            const integer = parseInt(stringArray[i], 10)
            if (!numbersArray.includes(integer)) {
                numbersArray.push(integer)
            }
        }
    }

    if (existingNumbers)
    // const bus = await Bus.create({
    //     busName: name
    // })

    const SeatNumber = await SeatNumber.create({
        value: seatNumber
    })
}
const availableBuses = async (req, res) => {

}

const generateTicket = async (req, res) => {

}

module.exports = { postNumbers, listOFNumbers, generateTicket}