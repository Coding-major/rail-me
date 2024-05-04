const bcrypt = require('bcryptjs')

const hash = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

const comparePassword = async (submittedPassword, databasePassword) => {
    const isMatch = await bcrypt.compare(submittedPassword, databasePassword)
    return isMatch
}

module.exports = { hash, comparePassword }