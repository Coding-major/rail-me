const { sequelize } = require('../connect/index')
const { DataTypes } = require('sequelize')

const Number = sequelize.define('Number', {
    number: DataTypes.NUMBER
})

module.exports = Number