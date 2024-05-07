const { Bus, Ticket, Seat } = require('../models/index')
const { where } = require('sequelize')
const { sequelize } = require('../connect')
const { StatusCodes } = require('http-status-codes')

const addBus = async (req, res) => {
    const { name, startFrom, stopAt, Numbers } = req.body

    const stringArray = Numbers.split(",")
    let numbersArray = []

    if (startFrom && stopAt) {
        for (let i = startFrom; i<=stopAt; i++) {
            numbersArray.push(i)
        }
    }

    if (Numbers) {
        for (let i=0; i<stringArray.length; i++) {
            const integer = parseInt(stringArray[i], 10)
            if (!numbersArray.includes(integer)) {
                numbersArray.push(integer)
            }
        }
    }

    try {
        await sequelize.transaction(async t => {
            const bus = await Bus.create({
                busName: name
            }, {transaction: t})

            if (numbersArray.length > 0) {
                const seatPromises = numbersArray.map(async newSeat => {
                    const exist = await Seat.findOne({seatNumber: newSeat})

                    if ( !exist ) {
                        seatObject = {newSeat}
                        seatObject.BusId = bus.id
                        return Seat.create(seatObject, {transaction: t})
                    }
                    
                } )

                await Promise.all(seatPromises)
            }

            res.status(StatusCodes.CREATED).json({msg: })
        })

        
    } catch (error) {
        
    }

    // const ticket = await Ticket.create({
    //     ticketID: "omomi123",
    //     SeatNumberId: 2

    // })

    res.status(200).json({msg: seatNumber})
}


// const updateBusSeat = async (req, res) => {
//     const { startFrom, stopAt, Numbers } = req.body
//     const stringArray = Numbers.split(",")
//     let numbersArray = []
//     const existingNumbers = await SeatNumber.findAll({where: {}})

//     if (startFrom && stopAt) {
//         for (let i = startFrom; i<=stopAt; i++) {
//             numbersArray.push(i)
//         }
//     }
//     if (Numbers) {
//         for (let i=0; i<stringArray.length; i++) {
//             const integer = parseInt(stringArray[i], 10)
//             if (!numbersArray.includes(integer)) {
//                 numbersArray.push(integer)
//             }
//         }
//     }

//     if (existingNumbers)
//     // const bus = await Bus.create({
//     //     busName: name
//     // })

//     const SeatNumber = await SeatNumber.create({
//         value: seatNumber
//     })
// }
const availableBuses = async (req, res) => {
    // const bus = await Bus.findAll()
    const seatNumber = await SeatNumber.findAll()

    // const ticket = await Ticket.findAll({
    //     // where: {BusId: 1},
    //     include: [
    //         {
    //             model: SeatNumber,
    //             include: [
    //                 {
    //                     model: Bus
    //                 }
    //             ]
    //         }
    //     ] 
    // })


    res.status(200).json({msg: seatNumber})
}

const generateTicket = async (req, res) => {

}

module.exports = { addBus, availableBuses}