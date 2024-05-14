const { sequelize } = require('../connect/index')
const { DataTypes, indexes } = require('sequelize')
const Bus = require('./busModel')

const Seat = sequelize.define('Seat', {
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
        fields: ['seatNumber', 'BusId']
    }]
}
)

Bus.hasMany(Seat, {onDelete: "CASCADE"})
Seat.belongsTo(Bus)

module.exports = Seat