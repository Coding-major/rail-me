const { customError } = require("../errors/indexErrors")
const {StatusCodes} = require("http-status-codes")

const errorHandler = (err, req, res, next) => {
    let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    let message = err.message ;

    if (err instanceof customError) {
        statusCode = err.statusCode
        message = err.message
        console.log(statusCode)
        return res.status(err.statusCode).json({msg: err.message})
    }
    if (err.name === "SequelizeUniqueConstraintError") {
        statusCode = 400
        message = "user with the email already exist"
        return res.status(StatusCodes.BAD_REQUEST).json({msg: message})
    }
    console.log(statusCode)
    console.log(err)
    return res.status(statusCode).json({msg: message})



}

module.exports = errorHandler