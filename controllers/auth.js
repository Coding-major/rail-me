const { where } = require("sequelize")
const User = require("../models/userModel")

const login = async (req, res) => {
    const {email, firstName, lastName, phoneNumber, password} = req.body

    // const alreadyExist = await User.findOne({where: {email: email}})

    // if (alreadyExist) {
    //     throw new Error("user already exist")
    // }

    
    const user = await User.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        password: password
    })

    res.json(user)
}

module.exports = {login}