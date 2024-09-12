// condition statement
// if , if else, if elesif, nasted if, switch case, ternary oprator

// wap in js to get greater of 4 numbers
let a = 100
let b = 45
let c = 110
let d = 4

// if(a > b){
//     if(a > c){
//         if(a > d){
//             console.log("A is greater A1!")
//         }else{
//             console.log("D is greater D1!")
//         }
//     }else if(c > d){
//         console.log("C is greater C1!")
//     }else{
//         console.log("D is greater D2!")
//     }
// }else if(b > c){
//     if(b > d){
//         console.log("B is greater B1!")
//     }else{
//         console.log("D is greater D3!")
//     }
// }else if(c > d){
//     console.log("C is greater C2!")
// }else{
//     console.log("D is greater D4!")
// }

// wap in js to find odd/even numbers

// let number = Number(prompt("Enter a number"))

// if (number % 2 == 0) {
//     console.log(number + " is a even number !")
// }else{
//     console.log(number + " is a odd number !")
// }

// wap in js to check if age of driver is valid or not

// doing comparision with logics oprators
// && AND , || OR

// if((a > b) && (a > c) && (a > d)){
//     console.log("A is greater of all !")
// }else if( (b > c) && (b > d) ){
//     console.log("B is greater of all !")
// }else if(c > d){
//     console.log("C is greater of all !")
// }else{
//     console.log("D is greater of all !")
// }

// wap in js to check entred year is a leap year or not !
// comes in every 4 years, will not occur in every 100 years, will repeat in every 400 years

// let year = Number(prompt("enter year"))

// if (year % 100 !== 0) {
//     if (year % 4 == 0) {
//         console.log(year + " is a leap year !")
//     } else {
//         console.log(year + " is not a leap year !")
//     }
// } else if (year % 400 == 0) {
//     console.log(year + " is a leap year !")
// } else {
//     console.log(year + " is not a leap year !")
// }

// if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
//     console.log(year + " is a leap year !")
// } else {
//     console.log(year + " is not a leap year !")
// }

// ternary oprator

// condition ? true code : false code

// let number = 56

// number % 2 == 0 ? console.log(number + " is a even number !") : console.log(number + " is odd number !")  

// a > b ? 
//     a > c ? 
//         a > d ? 
//             console.log("A is greater of all !") 
//             : console.log("D is greater of all !") 
//         :  c > d ?
//              console.log("C is greater of all") 
//                  : console.log("D is greater of all")
//     : b > c ?
//             b > d ? console.log("B is greater of all") 
//                   : console.log(":C is greater of all")
//             : c > d ? 
//                     console.log("C is greater of all;") 
//                     : console.log("D is greater of all !") 


// a > b ? a > c ? a > d ? console.log("A is greater of all !") : console.log("D is greater of all !") :  c > d ? console.log("C is greater of all") : console.log("D is greater of all") : b > c ? b > d ? console.log("B is greater of all") : console.log(":C is greater of all") : c > d ? console.log("C is greater of all;") : console.log("D is greater of all !") 

// switch case | to make a menu driven program 

// let choice = "z"

// switch(choice){
//     case 'a' : console.log("you choosed case a !")
//     break;
//     case 'e' : console.log("you choosed case e !")
//     break;
//     case 'b' : console.log("you choosed case b !")
//     break;
//     case 'c' : console.log("you choosed case c !")
//     break;
//     case 'd' : console.log("you choosed case d !")
//     break;
//     case 'f' : console.log("you choosed case f !")
//     break;
//     default : console.log("invalid choice please select between a to f")
// }

// wap in js to make a switch case for finding out vowels and consolants