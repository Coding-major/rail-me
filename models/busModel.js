const { sequelize } = require('../connect/index')
const { DataTypes } = require('sequelize')

const Bus = sequelize.define('Bus', {
    busName: {
        type: DataTypes.STRING
    },

    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Bus