const { sequelize } = require('../connect/index')
const { DataTypes } = require('sequelize')
const Bus = require('./busModel')

const SeatNumber = sequelize.define('SeatNumber', {
    value: {
        type: DataTypes.NUMBER,
        unique: true
    },

    isTaken: false
})

Bus.hasMany(SeatNumber)
SeatNumber.belongsTo(Bus)

module.exports = SeatNumber