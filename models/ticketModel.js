const { DataTypes } = require('sequelize')
const { sequelize } = require('../connect/index' )

const Ticket = sequelize.define('Ticket', {
    ticketID: DataTypes.STRING,
    seatNumber: DataTypes.NUMBER,
    trainType: DataTypes.STRING
})