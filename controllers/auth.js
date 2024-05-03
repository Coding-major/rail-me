const { where } = require("sequelize")
const User = require("../models/userModel")
const { badRequest, customError } = require('../errors/indexErrors')
const { StatusCodes } = require("http-status-codes")

const register = async (req, res) => {
    const {email, firstName, lastName, phoneNumber, password} = req.body

    // const alreadyExist = await User.findOne({where: {email: email}})

    // if (alreadyExist) {
    //     throw new badRequest("user already eeexist")
    //     //return res.status(StatusCodes.BAD_REQUEST).json({msg: "user alteardy exist"})
    // }

    
    const user = await User.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        password: password
    })

    res.status(StatusCodes.CREATED).json({msg: user})
}

module.exports = {register}