// // while, do-while ,for

// // while loop

// // syntax
// // while(condition){
// //     // while condition is true do this
// //     // updation/change in condition
// // }

// // wap in js to print 1 - 1000 even/odd numbers

// // let number = 1

// // while(number <= 1500){
// //     // if(number % 2 == 0){
// //     //     console.log(number)
// //     // }
// //     console.log(number)
// //     // increment by 1
// //     number++
// // }

// // wap to check years for leap year or not from 0 - now(2024)

// // function checkYear(year) {

// //     let answer = ""

// //     if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
// //         answer = year + " is a leap year !"
// //     } else {
// //         answer = year + " is not a leap year !"
// //     }

// //     return answer

// // }

// // make it reverse i.e. 2024 - 0

// // let inputYear = 0

// // while(inputYear <= 2024){
// //     console.log(checkYear(inputYear))
// //     inputYear++
// // }


// // wap to count leap year from 0 - 2024

// // let year = 0    
// // let counter = 0
// // let notCounter = 0

// // while (year <= 2024) {
// //     if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
// //        counter++
// //     }else{
// //         notCounter++
// //     }
// //     year++
// // }

// // console.log("from 0 to 2024 total leap years are : "+ counter + " and comman years are : " + notCounter)


// // let year = 0    
// // let counter = 0
// // let notCounter = 0

// // while (year <= 2024) {
// //     (year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0) ? counter++ : notCounter++
// //     year++
// // }

// // console.log("from 0 to 2024 total leap years are : "+ counter + " and comman years are : " + notCounter)


let leapYearCounter = (start, end) => {

    let startingYear = start
    let counter = 0
    let notCounter = 0

    while (start <= end) {
        (start % 100 !== 0) && (start % 4 == 0) || (start % 400 == 0) ? counter++ : notCounter++
        start++
    }

    // console.log("from " + startingYear + " to " + end + " total leap years are : " + counter + " and comman years are : " + notCounter)
    // this is a template litral es6 module
    console.log(`from ${startingYear} to ${end} total leap years are : ${counter} and comman years are : ${notCounter}`)

    // '' "" ``

}

leapYearCounter(1000, 2024)
// // leapYearCounter(2000,2024)

// // let number = 1000

// // while (number >= 0) {
// //     console.log(number)
// //     number--
// // }

// // wap in js to calculate factorial of any number

// // 5! = 5 * 4 * 3 * 2 * 1 = 120

// // let number = 5
// // let orginalNumber = number
// // let factorial = 1 

// // while(number != 0){
// //     factorial = factorial * number
// //     number --
// // }

// // console.log("factorial of "+orginalNumber+ " is: " + factorial)

// // function calculateFactorial(number) {
// //     let orginalNumber = number
// //     let factorial = 1

// //     while (number != 0) {
// //         factorial = factorial * number
// //         number--
// //     }
// //     console.log("factorial of " + orginalNumber + " is: " + factorial)
// // }

// // calculateFactorial(5)

// // reverse of number and string

// let number = originalNumber = 1201

// let reverse = 0

// let d = 0

// while (number != 0) {

//     d = number % 10

//     reverse = reverse * 10 + d

//     number = parseInt(number / 10)
//     // this will get as a float/double we have to reduce the decimal by type casting it into a integer

// }

// console.log(reverse)

// // wap in js to check a number is palindrome or not make a function for it 

// template letral
// es6 module
