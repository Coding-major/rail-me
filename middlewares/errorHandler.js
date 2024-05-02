const { customError } = require("../errors/indexErrors")
const {StatusCodes} = require("http-status-codes")

const errorHandler = (err, req, res, next) => {
    let statusCode;
    let message;

    if (err instanceof customError) {
        return res.status(err.statusCode).json({msg: err.message})
    }


}