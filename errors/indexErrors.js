const badRequest = require('./badRequest')
const customError = require('./customError')
const forbidden = require('./forbidden')
const notFound = require('./notFound')
const unAuthourized = require('./unAuthorized')

module.exports = {
    badRequest,
    customError,
    forbidden,
    notFound,
    unAuthourized
}