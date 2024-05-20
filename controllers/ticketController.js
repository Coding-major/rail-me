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


const createTicket = async(req, res) => {
    const { firstName, lastName,  seatNumbers} = req.body

    const tickets = seatNumbers.map(async seatNumber => {
        const exist = await Seat.findOne({where : {seatNumber, available: true}})
        
        if (!exist) {
            
        }
    })
}