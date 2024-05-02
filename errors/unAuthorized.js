const customError = require('./customError')
const { StatusCodes} = require("http-status-codes")

class unAuthourized extends customError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = unAuthourized