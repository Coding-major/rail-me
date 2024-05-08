// let numbersArray = []
// startFrom = 1
// stopAt=10
// for (let i = startFrom; i<=stopAt; i++) {
//     numbersArray.push(i)
// }

// const inputString = "t,4,8,0,4,9,2,20";
// const stringArray = inputString.split(",")
// let numbersArray = [0]
// for (let i=0; i<stringArray.length; i++) {
//     let newNumber = parseInt(stringArray[i], 10)
//     if (!numbersArray.includes(newNumber)) {
//         numbersArray.push(newNumber)
//     }
// }
// console.log(numbersArray)

// if (req.body.seats && req.body.seats.length > 0) {
//     // Create seats associated with the bus
//     const seatPromises = req.body.seats.map(seatData => {
//       // Add BusId to each seatData object
//       seatData.BusId = bus.id;
//       return Seat.create(seatData, { transaction: t });
//     });

//     // Execute all seat creation promises concurrently
//     await Promise.all(seatPromises);
//   }

//   if (req.body.seats && req.body.seats.length > 0) {
//     // Create seats associated with the bus
//     for(let i=0; i<=req.body.seats; i++) {
//         await Seat.create(req.body.seats[i], { transaction: t });
//     }
//   }

// const numbersArray = [1,3,4,5]
// const seatPromises = numbersArray.map(newSeat => {
//     const seatObject = {newSeat}
//     seatObject.poll = "kite"
//     console.log(seatObject);
//     // seatObject = {newSeat}
//     // seatObject.BusId = bus.id
//     // return Seat.create()
// } )

// try {
//     const name = await User.create({name: "musty"})
//     const game = await User.create({game: "musty"})
//     const job = await User.create({job: "musty"})
//     const action = await User.create({action: "musty"})
// } catch (error) {
//     resizeBy.json({msg: error})
// }

const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4()
;

console.log(uuid);