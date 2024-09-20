// // // // we have to perfrom a search opration in an array
// // // // linear search(can directly performed), binary search (we need a sorted array) algo.s

// // // // linear search

// // // let students = [
// // //     {
// // //         name: "Student 1",
// // //         marks: 55,
// // //         phone: 123,
// // //         roll: 1,
// // //         courses: ["web dev", "graphics"]
// // //     },
// // //     {
// // //         name: "Student 2",
// // //         marks: 66,
// // //         phone: 456,
// // //         roll: 2,
// // //         courses: ["web dev"]
// // //     },
// // //     {
// // //         name: "Student 3",
// // //         marks: 32,
// // //         phone: 789,
// // //         roll: 3,
// // //         courses: ["web dev", "graphics", "digital marketing"]
// // //     },
// // //     {
// // //         name: "Student 4",
// // //         marks: 99,
// // //         phone: 912,
// // //         roll: 4,
// // //         courses: ["web dev"]
// // //     },
// // //     {
// // //         name: "Student 5",
// // //         marks: 45,
// // //         phone: 987,
// // //         roll: 5,
// // //         courses: ["graphics"]
// // //     },
// // //     {
// // //         name: "Student 6",
// // //         marks: 89,
// // //         phone: 654,
// // //         roll: 6,
// // //         courses: ["web dev", "graphics", "digital marketing"]
// // //     },
// // //     {
// // //         name: "Student 7",
// // //         marks: 64,
// // //         phone: 321,
// // //         roll: 7,
// // //         courses: ["web dev", "graphics"]
// // //     }
// // // ]

// // // let searchValue = "Student 5"

// // // let flag = false

// // // let steps = 1

// // // let position = 0

// // // for(let i = 0 ; i < students.length ; i++){
// // //     if(students[i].name == searchValue ){
// // //         flag = true
// // //         position = i + 1
// // //         break;
// // //     }
// // //     steps++
// // // }

// // // console.log(steps)

// // // if(flag){
// // //     console.log(`we found the element at position ${position} in ${steps} steps`)
// // // }else{
// // //     console.log(`we din't found the element at any position in ${steps} steps`)
// // // }

// // // binary search algo

// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // // to perform a binary search we have to sort a array

// // let startIndex = 0
// // let endIndex = array.length - 1
// // let searchValue = 9

// // let flag = false

// // let position = "string"

// // let steps = 0


// // while (startIndex <= endIndex) {

// //     steps++

// //     let midPoint = parseInt((startIndex + endIndex) / 2)
// //     // remove the decimal points if it has

// //     if (array[midPoint] < searchValue) {

// //         startIndex = midPoint + 1
// //         // when searchvalue is less than midpoint 
// //     } else if (array[midPoint] > searchValue) {

// //         endIndex = midPoint - 1
// //         // when searchvalue is greater than midpoint 

// //     } else if (array[midPoint] == searchValue) {

// //         position = midPoint + 1
// //         flag = true
// //         break;

// //     }
// // }

// // if (flag) {
// //     console.log(`we found the element at position ${position} !`)
// //     console.log(steps)
// // } else {
// //     console.log(`element not found !`)
// // }

// // // sorting
// // // bubble sort algo

// // let array1 = [5, 1, 2, 4, 3]


// // for (let i = 0; i < array1.length; i++) {
// //     if (array1[i] > array1[i + 1]) {
// //         let temp = array1[i]
// //         array1[i] = array1[i + 1]
// //         array1[i + 1] = temp
// //     }
// // }

// // console.log(array1)

// // selection sort algo

// function selectionSort(array) {

//     let sortArray = array

//     let min_index = 0

//     let n = sortArray.length

//     for (let i = 0; i < n - 1; i++) {

//         // compare inital value/index with other to get the min value

 

//         for (let j = i; j < n; j++) {
//             if (sortArray[j] < sortArray[min_index]) {
//                 min_index = j
//             }
//         }

//         let temp = sortArray[i]
//         sortArray[i] = sortArray[min_index]
//         sortArray[min_index] = temp
//     }

//     return sortArray

// }

// let nums = [4,7,1,3,2,5,0]

// console.log(selectionSort(nums))

// let names = ["c","a","d","b"]

// console.log(selectionSort(names))
