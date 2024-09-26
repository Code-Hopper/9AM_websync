// let myPromise = new Promise((resolve,reject)=>{
//     let x = 11;

//     if(x < 10){
//         resolve("promise complete !")
//     }else{
//         reject("promise rejected !")
//     }
// })

// myPromise.then((resolve)=>{
//     console.log("promise resolved !",resolve)
// } , (reject)=>{
//     console.log("promise rejected !",reject)
// })


function code() {

    let myPromise = new Promise((resolve, reject) => {
        let x = 11;

        if (x < 10) {
            resolve("promise complete !")
        } else {
            reject("promise rejected !")
        }
    })

    return myPromise

}

// async function call() {
//     try {
//        await code()
//     } catch (err) {
//         console.log("some errow from promise ! ", err)
//     }
// }

let call = async () => {
    try {
        await code()
    } catch (err) {
        console.log("some errow from promise ! ", err)
    }
}


call()


console.log("some code !")
console.log("some code !")
console.log("some code !")
console.log("some code !")
console.log("some code !")

document.getElementById("btn-1").addEventListener("click",()=>{
    alert("button has beeen clicked !")
})

let userInput;

document.getElementById("input-1").addEventListener("change",(e)=>{
    console.log(e.target.value)
    userInput = e.target.value
    alert(`you have written ${userInput} !`)
})