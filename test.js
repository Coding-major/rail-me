// let numbersArray = []
// startFrom = 1
// stopAt=10
// for (let i = startFrom; i<=stopAt; i++) {
//     numbersArray.push(i)
// }

const inputString = "t,4,8,0,4,9,2,20";
const stringArray = inputString.split(",")
let numbersArray = [0]
for (let i=0; i<stringArray.length; i++) {
    let newNumber = parseInt(stringArray[i], 10)
    if (!numbersArray.includes(newNumber)) {
        numbersArray.push(newNumber)
    }
}
console.log(numbersArray)