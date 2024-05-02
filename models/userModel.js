const {DataTypes} = require("sequelize")
const {sequelize} = require("../connect/index")

const User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: {
                args: [2],
                msg: "firstname must contain more than 2 characters"
            },
            max: {
                args: [20],
                msg: "maximum is 20"
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: {
                args: [2],
                msg: "firstname must contain more than 2 characters"
            },
            max: {
                args: [20],
                msg: "maximum is 20"
            }
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: {
                msg: "must contain both letters and numbers"
            },
            min: {
                args: [6],
                msg: "password must be more than 6"
            }
        }
    }
})

module.exports = User