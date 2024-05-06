const { sequelize } = require('../connect/index')
const { DataTypes } = require('sequelize')

const Bus = sequelize.define('Bus', {
    busName: {
        type: DataTypes.STRING
    },

    available: true
})

module.exports = Bus