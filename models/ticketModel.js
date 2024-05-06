const { DataTypes } = require('sequelize')
const { sequelize } = require('../connect/index' )
const SeatNumber = require('./seatNumber')

const Ticket = sequelize.define('Ticket', {
    ticketID: DataTypes.STRING,
})

Ticket.belongsTo(SeatNumber)

module.exports = Ticket