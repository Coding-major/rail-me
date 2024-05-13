const { Bus, Ticket, Seat } = require('../models/index')
const { where } = require('sequelize')
const { sequelize } = require('../connect')
const { StatusCodes } = require('http-status-codes')
const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4


module.exports = { addBus, updateBusSeat, availableBuses, generateTicket}