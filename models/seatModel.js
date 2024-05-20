const { sequelize } = require('../connect/index')
const { DataTypes, indexes } = require('sequelize')
const Bus = require('./busModel')

const Seat = sequelize.define('Seat', {
    seatNumber: {
        type: DataTypes.INTEGER,
    },

    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true // Set default value to false
      }
},
{
    indexes: [{
        unique: 'compositeIndex',
        fields: ['seatNumber', 'BusId']
    }]
}
)

Bus.hasMany(Seat, {onDelete: "CASCADE"})
Seat.belongsTo(Bus)

module.exports = Seat