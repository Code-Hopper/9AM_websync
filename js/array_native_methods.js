// let array = [1,2,3,4,5,6,7,8,9]

// array.push("new element")

// array.unshift("new elemnent")

// array.pop()
// array.shift()

// array.length

// for itration/tranversing

// for of (loop) ,  forEach() , map(), filter()

// for ( let element of array ){
//      console.log(element)
// }

// for(let element of array){
//     console.log(element)
// }

// let numbers = [1,2,3,4,5,6]

// let students = []

// for(let number of numbers){
//     console.log(number)
// }

// for(let student of students){
//     console.log(student)
// }

// let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// for(let num of nums){

//     for(let element of num){
//         console.log(element)
//     }

// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// array.forEach(()=>{})

// nums.forEach((element, index) => {
//     console.log(`${element} at ${index}`)
// })

// let makeSquareNumber = (num) => {
//     console.log(num * num)
// }

// let makeSquareNumber = (num) => {
//     return num * num
// }

// // nums.forEach(makeSquareNumber) will not return a new array

// // console.log(nums)

// // array.map(function) this returns a new array

// let newArray = nums.map(makeSquareNumber)

// console.log(newArray)

let nums = [5, 1, 2, 7, 4, 3, 9, 8 , 6]

nums.sort((prev,next)=>{
    // return next - prev //descending order
    return prev - next //ascending order
})

console.log(nums)

let strings = ["z","b","c","d","a","f","Z","e","A"]

// A - 65 , B - 66
// shift - 32
// a - 97

strings.sort((prev,next)=>{
    return prev > next
})

console.log(strings)

// array.filter(()=>{}) return the element of array based on the filter conditions

// let evenNums = nums.filter((num) => {
//     return num % 2 == 0
// })

// let oddNums = nums.filter((num) => {
//     return num % 2 != 0
// })

// console.log(evenNums)
// console.log(oddNums)

// let searchValue = 123

// let answer = nums.filter((num)=>{
//     return num == searchValue
// })

// console.log(answer)

// nums = nums.filter((num)=>{
//     return num % 3 != 0
// })

// console.log(nums)