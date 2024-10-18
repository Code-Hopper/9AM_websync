// // // math class

// // // console.log(Math)

// // // console.log(Math.PI)
// // // console.log(Math.E)
// // // console.log(Math.LOG10E)
// // // console.log(Math.LOG2)
// // // console.log(Math.SQRT2)
// // // console.log(Math.SQRT1_2)

// // let num = 8

// // console.log(Math.sqrt(num))
// // console.log(Math.cbrt(num))

// // // round of 1.5  2 1.4 1 

// // console.log(Math.round(12.15345345))
// // console.log(Math.round(12.51))
// // console.log(Math.round(-12.51))

// // // floor 

// // console.log(Math.floor(12.9999))

// // // ceil

// // console.log(Math.ceil(12.00001))

// // // pow

// // // Math.pow(base,exponent)

// // console.log(Math.pow(5, 2))

// // // wap in js to find greater for 3 numbers

// // // let a = 10;
// // // let b = 11;
// // // let c = 5;

// // // console.log(Math.max(a,b,c,123,9999))
// // // console.log(Math.min(a,b,c,123,9999))

// // let nums = [1, 2, 43, 4, 234, 3426, 1235, 6]

// // console.log(Math.max(...nums))
// // console.log(Math.min(...nums))

// // // destructure a array and object

// // // we have a spred oprator for this task
// // // ...
// // console.log(...nums)
// // // below are the examples of extracting the data from array or objects

// // let [a, b, c, d] = [1, 2, 3, 4]

// // let { name, phone } = { name: "amey", phone: "9766696550" }

// // let { x, y } = { x: "data x", y: "data y" }

// // // console.log(a, b, c, d)
// // console.log(`${a}, ${b} , ${c} , ${d}`)
// // // console.log(b)
// // // console.log(c)
// // // console.log(d)

// // console.log(name)
// // console.log(phone)

// // console.log(x)
// // console.log(y)

// console.log( Math.floor((Math.random() * 6) + 1))
// console.log( Math.floor((Math.random() * 6) + 1))


// console.log( ((Math.random() * 6) + 1).toFixed(0))


// date class

// = new Date(year, month(0-11), date, hour); // noon of 1962-07-07 (7th of July 1962, month is 0-indexed)

// let myDate = new Date(2020,0,20)

// let myDate = new Date()

// // myDate.

// // setters

// // myDate.setDate(12)
// // myDate.setFullYear(2020)


// // get methods / getters

// console.log(myDate.getDate())
// console.log(myDate.getDay())
// console.log(myDate.getMonth())
// console.log(myDate.getFullYear())
// console.log(myDate.getHours())
// console.log(myDate.getMinutes())
// console.log(myDate.getSeconds())

// console.log(`${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`)

// console.log(myDate.getMilliseconds())

// console.log(myDate.getTime())

// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())

// set methods / setters

// let students = [
//     {
//         name : "student 1",
//         phone: "123",
//         addmissionDate: "Sep 25 2024"
//     },

//     {
//         name : "student 2",
//         phone: "123",
//         addmissionDate: "Sep 28 2024"
//     },

//     {
//         name : "student 3",
//         phone: "123",
//         addmissionDate: "Sep 19 2024"
//     },

//     {
//         name : "student 4",
//         phone: "123",
//         addmissionDate: "Sep 20 2024"
//     }
// ]

// // perform selection sort to sort by addmission date

// students.sort((prev,next)=>{
//     if(new Date(prev.addmissionDate).getTime() > new Date(next.addmissionDate).getTime() ){
//         return 1
//     }else{
//         return -1
//     }
// })

// let newStudentsArray = students.filter((student)=>{
//     if(new Date("Sep 20 2024").getTime() < new Date(student.addmissionDate).getTime()){
//         return student
//     }
// })

// console.log(students)
// console.log(newStudentsArray)

// syncronus / blocking javascript