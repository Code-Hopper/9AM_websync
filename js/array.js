// let array = [1, 2, 3, 4, 5, "amey", true, {}, () => { }]
// array is collection of data
// array has some indexes that can be taped into by doing
// array[index]
// array is indexed, indexes starts with 0

// array[1] = "new value"

// console.log(array[1])

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(numbers.length)

// let index = 0

// while (index < numbers.length) {
//     console.log(numbers[index])
//     index++
// }

// console.log(numbers[numbers.length + 1])

// to insert elements into array we have push and unshift method

numbers.push(11)
numbers.push(12)
numbers.push(13)
numbers.push(14)
numbers.push(15)

// array.push(element) add a new element in array from trailing side

// array.unshift(element) add a new element in array from leading side

numbers.unshift(1234)
numbers.unshift(5678)


// to remove element from array we have pop and shift

numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()
// array.pop() removes the element from trailing side of array 

numbers.shift()
// array.shift() removes the element from leading side of an array

console.log(numbers)