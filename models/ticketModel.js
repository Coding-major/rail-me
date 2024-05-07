const { DataTypes } = require('sequelize')
const { sequelize } = require('../connect/index' )
const { Seat } = require("../models/index")

const Ticket = sequelize.define('Ticket', {
    ticketID: DataTypes.STRING,
})

Ticket.belongsTo(Seat)

module.exports = Ticket