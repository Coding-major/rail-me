const { sequelize } = require('../connect/index')
const { DataTypes, indexes } = require('sequelize')
const Bus = require('./busModel')

const Seat = sequelize.define('SeatNumber', {
    seatNumber: {
        type: DataTypes.INTEGER,
    },

    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // Set default value to false
      }
},
{
    indexes: [{
        unique: 'compositeIndex',
        fields: ['value', 'BusId']
    }]
}
)

Bus.hasMany(Seat)
Seat.belongsTo(Bus)

module.exports = Seat