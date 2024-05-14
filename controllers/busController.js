const { sequelize } = require('../connect')
const { Bus, Ticket, Seat } = require('../models/index')
const { where } = require('sequelize')
const { StatusCodes } = require('http-status-codes')
const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4
const {
    badRequest,
    customError,
    forbidden,
    notFound,
    unAuthourized
} = require("../errors/indexErrors")

const createBus = async (req, res) => {

        const { busName } = req.body
    
        if ( !busName) {
            throw new badRequest('please provide the bus name')
        }

        const exist = await Bus.findOne({where: {busName}})
        
        if (exist) {
            throw new badRequest("bus already exist")
        }
        const bus = await Bus.create({busName})

        res.status(StatusCodes.CREATED).json({msg: {
            busName: bus.busName,
            available: bus.available
        }})
    
}

const deleteBus = async (req, res) => {
    const { busId } = req.params

    const exist = await Bus.findOne({where: {id: busId}})
    
    if (!exist) {
        throw new notFound("no bus with the id exist")
    }

    const bus = await Bus.destroy({where: {id: busId}})

    res.status(StatusCodes.OK).json({msg: "deleted successfully"})
}


const getBuses = async (req, res) => {
    const buses = await Bus.findAll()

    res.status(StatusCodes.OK).json({msg: buses})
}


const getSingleBus = async(req, res) => {
    const { busId } = req.params
    const bus = await Bus.findOne({where: {id: busId}})

    if (!bus) {
        throw new notFound('no bus with the id')
    }

    res.status(StatusCodes.OK).json({msg: { bus }})
}


const getBusSeats = async(req, res) => {
    const { BusId } = req.params
    const seats = await Seat.findAll({where: {BusId}})

    if (!seats) {
        throw new notFound('no seats for the specified bus')
    }

    res.status(StatusCodes.OK).json({msg: {seats}})
}
module.exports = { createBus, deleteBus, getBuses, getSingleBus, getBusSeats}