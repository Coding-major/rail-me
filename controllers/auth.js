const { where } = require("sequelize")
const User = require("../models/userModel")
const { badRequest, customError, notFound, unAuthourized } = require('../errors/indexErrors')
const { StatusCodes } = require("http-status-codes")
const { hash, comparePassword } = require('../utils/bcrypt')

const register = async (req, res) => {

    const { email, firstName, lastName, phoneNumber, password } = req.body
    const alreadyExist = await User.findOne({where: {email: email}})

    if (!email || !firstName || !lastName || phoneNumber || !password) {
        throw new badRequest("please fill in the available inputs")
    }
    if (alreadyExist) {
        throw new badRequest("user already eeexist")
    }

    const hashedPassword = hash(password)
    const user = await User.create({
        email,
        firstName,
        lastName,
        phoneNumber,
        password: hashedPassword
    })

    res.status(StatusCodes.CREATED).json({msg: user})

}

const login = async (req, res) => {

    const {email, password} = req.body

    if (!email || !password) {
        throw new badRequest("please fill in the available inputs")
    }

    const user = await User.findOne({where: {email: email}})

    if(!user) {
        throw new notFound("no user with the email submitted")
    }

    const hashedPassword = hash(password)
    const passwordCorrect = comparePassword(hashedPassword, user)

    if (!passwordCorrect) {
        throw new unAuthourized('password is not correct')
    }

    res.status(StatusCodes.OK).json({msg: user})

}

const logout = async (req, res) => {
    
}

module.exports = { register, login }