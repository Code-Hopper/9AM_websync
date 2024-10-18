// setTimeout , setInterval

console.log("line 1")

console.log("line 2")


let a = setInterval(()=>{

    console.log("this is setInterval")

},500)


setTimeout(()=>{
    // console.log("this is setTimeout")
    clearInterval(a)
},10000)

// calls the callback function at x time 


console.log("line 3")

console.log("line 4")

console.log("line 5")