// variables & data types 

// variable: a empty box which may have some name where data can be stored and called.

// ; for termination of a line or statement

// syntax for variable

// scope variable_name assignment-oprator data/value(optional);

// public (var), protected (let, const)
// rules for naming a variable
// the has be unique, no special char(!@#$%^&*),no space in name (first name) (first_name), name can be alpha-numeric (name123) but cannot start with a number name_1(right), 1name(wrong)   
// assignment oprator , = , += , -= , /= , %= , *=

// write a opration adding 2 numbers and store the total in number1

// value = number1 + number2

// number1 += number2
// number1 -= number2
// number1 /= number2
// number1 %= number2
// number1 *= number2

// to write value/data we have some data types
// numbers (integers(1,2,3,4,5,...)and floats(1.1,1.2,1.3,1.4,......)), 
// string (group for charchters) we write string in -> " some string "
// boolean (true/false)
// NaN, Null, Undefined

// let box_1 = 1234
// let box_2 = "this is a string"
// let box_3 = true
// let box_4 = false
// let box_5 = 10.5 

// expersion and statement

// oprators in js

// 1. airthamatic oprators + , - , / , * , %
// increement and decreement oprators ++ , --
// 2. assignment oprators = , +=,-=,/=,%=,*=
// 3. conditional(comparision oprators) oprators < , > , <= , >=, == , === , != 
// 4. logical oprators && (and), ||(or)
// extra oprators, .

// functions, small block of code that can be called again and again as needed !

// built in function , user defined function

// built in function input & output function
// alert(), console.log() - output function

// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")
// console.log("this is some message")

// alert("this is also a message")

// input fuinction in js

// let name = prompt("enter some data !")

// console.log("data from prompt is : ")
// console.log(name)

// function_name("something") , 

// typeof() this function returns the datatype of passed args 

// let data = Number("1a")
// console.log(typeof(data))
// console.log(data)

// let num1 = 20
// let num2 = 20

// let sum = num1 + num2

// string concatation | we can create custom value strings
// join a string with other string or with a variable

// the sum of 10 and 20 is 30

// console.log(
// "the sum of " + num1 + " and " + num2 + " is " + (num1 + num2)
// )

// console.log(num1 + num2)

// prompt always returns us a string we have to typecast it for a different data type.

// string + number = string
// number + string = string
// number + number = number
// string + string = string

// type casting
// changing a data type of data to other data type
// example casting a number to a string or vice-versa
// number(int, float), string, boolean

// number ->  string, number -> boolean

// string -> number, string -> boolean

// boolean -> number , boolean -> string

// 1) number -> string
// let data = 12345
// console.log(" data type before "+typeof(data))

// data = String(data)
// data = data.toString()

// console.log(" data type after "+typeof(data))
// 2) number to boolean

// console.log(" data type before "+typeof(data))

// data = Boolean(data)
// console.log(data)

// if value if greater than 0 then true else false

// console.log(" data type after "+typeof(data))

// 3) string -> number

// let data = ""

// console.log(" data type before "+typeof(data))

// // // if a string is alpha numeric then the value will become NaN.
// // data = Number(data)

// // console.log(data)

// // console.log(" data type after "+typeof(data))

// // 4) string -> boolean
 
// // if empty string then false, if the string has only false then false and if it has true then true

// data = Boolean(data)
// console.log(data)

// console.log(" data type after "+typeof(data))


// 5) Boolean -> number

// let data = true

// console.log(" data type before "+typeof(data))

// data = Number(data)

// // if boolean has true then number will be 1 else 0

// console.log(data)

// console.log(" data type after "+typeof(data))

// 6) boolean -> string

let data = false

console.log(" data type before "+typeof(data))

data = String(data)
// data = data.toString()

// if boolean has true then string will be true else false

console.log(data)

console.log(" data type after "+typeof(data))


// let userInput = Number(prompt("enter number"))

// console.log(typeof(userInput))
// console.log(userInput)

// wap in js take 2 number using prompt type cast then into numbers then perfor the addition and console.log the output.
// try to make the code is lesser line possible