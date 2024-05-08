const { Bus, Ticket, Seat } = require('../models/index')
const { where } = require('sequelize')
const { sequelize } = require('../connect')
const { StatusCodes } = require('http-status-codes')
const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4

const addBus = async (req, res) => {
    const { name, startFrom, stopAt, numbers } = req.body

    const stringArray = numbers.split(",")
    let numbersArray = []

    if (startFrom && stopAt) {
        for (let i = startFrom; i<=stopAt; i++) {
            numbersArray.push(i)
        }
    }

    if (stringArray || stringArray > 0) {
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
                        seatObject = {}
                        seatObject.seatNumber = newSeat
                        seatObject.BusId = bus.id
                        await Seat.create(seatObject, {transaction: t})
                    }
                    
                } )

                await Promise.all(seatPromises)
            }

            res.status(StatusCodes.CREATED).json({msg: "Bus and it's seat created"})
        })

        
    } catch (error) {
        res.status(StatusCodes.NOT_IMPLEMENTED).json({msg: "the operation failed please try again"})
    }
}


const updateBusSeat = async (req, res) => {
    const { newBusName, seatsToDelete, startFrom, stopAt, newSeatsNumbers } = req.body
    const stringArray = newSeatsNumbers.split(",")
    let numbersArray = []
    
    

    if (startFrom && stopAt) {
        for (let i = startFrom; i<=stopAt; i++) {
            numbersArray.push(i)
        }
    }
    if (stringArray) {
        for (let i=0; i<stringArray.length; i++) {
            const integer = parseInt(stringArray[i], 10)
            if (!numbersArray.includes(integer)) {
                numbersArray.push(integer)
            }
        }
    }

    const queries = [
        () => {
            if (newBusName) {
                return Bus.update({busName: newBusName}, {where: {id: req.params.id}})
            }
        },

        async () => {
            if (seatsToDelete || seatsToDelete.length > 0) {
                await Promise.all(seatsToDelete.map(async seat => {
                    const exist = await Seat.findOne({seatNumber: seat})

                    if (exist) {
                        return Seat.destroy({
                            where: {
                                seatNumber: seat,
                                BusId: req.params.id
                            }
                        })
                    }
                }))
            }
        },

        async () => {
            if (numbersArray.length > 0) {
                const seatPromises = numbersArray.map(async newSeat => {
                    const exist = await Seat.findOne({seatNumber: newSeat})

                    if ( !exist ) {
                        seatObject = {newSeat}
                        seatObject.BusId = bus.id
                        return Seat.create(seatObject)
                    }
                    
                } )

                return Promise.all(seatPromises)
            }
        }
    ]


    const success = []
    const failure = []
    for (const query of queries) {
        try {
            const result = await query()
            success.push(result)
        } catch (error) {
            failure.push(error.message)
        }
    }

    res.status(StatusCodes.CREATED).json({msg: {
        success: success,
        failure: failure
    }})


}



const availableBuses = async (req, res) => {
    // const bus = await Bus.findAll()
    const seat = await Seat.findAll({
        where: {BusId: 1},
        include: [
            {
                model: Bus
            }
        ]
    })


    res.status(200).json({msg: seat})
}

const generateTicket = async (req, res) => {
    const { fistName, lastName, seat} = req.body
    const ticket = await Ticket.create({
        fistName,
        lastName,
        ticketID: uuid,
        SeatId: seat
    })
}

module.exports = { addBus, updateBusSeat, availableBuses, generateTicket}