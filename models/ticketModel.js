const { DataTypes } = require('sequelize')
const { sequelize } = require('../connect/index' )
const Seat = require("../models/seatModel")

const Ticket = sequelize.define('Ticket', {
    ticketID: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
})

Ticket.belongsTo(Seat)
module.exports = Ticket