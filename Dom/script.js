// // // // console.log(document)

// // // // target element using javascript

// // // // syntax
// // // // document.selector();

// // // // document.getElementById("write the id here")

// // // let btn1 = document.getElementById("btn1")

// // // // document.getElementsByClassName("write class here")

// // // let containers = document.getElementsByClassName("container")

// // // // document.getElementsByTagName("tagname here")

// // // let h1_tags = document.getElementsByTagName("h1")

// // // // document.querySelector(".classname / #id / tagname / selector selector")
// // // // will alwasys return only single element

// // // let element = document.querySelector(".container-1 + .container-2")

// // // console.log(element)


// // // // document.querySelectorAll(".classname / #id / tagname / selector selector")
// // // // will alwasys return only array of element/s

// // // let elements = document.querySelectorAll("li")

// // // console.log(elements)

// // // properties and methods of elements

// // let btn1 = document.getElementById("btn1")

// // // console.log(btn1.innerHTML)

// // // btn1.innerHTML = "<h1 class='bold color1'>new value</h1>"

// // // console.log(btn1.innerHTML)


// // // console.log(btn1.innerText)

// // console.log(btn1.classList)
// // console.log(btn1.id)

// // // btn1.style.color = "red"

// // // console.log(btn1.style)

// // console.log(document.querySelector("a").href)

// // document.querySelector("a").href = "https://www.google.com"

// // console.log(document.querySelector("a").href)

// // let input = document.getElementById("i1")

// // console.log(input.placeholder)
// // console.log(input.name)
// // console.log(input.required)
// // input.required = false
// // console.log(input.disabled)
// // input.disabled = false

// // console.log(input.value)

// let btn1 = document.getElementById("btn1")

// // btn1.onclick = (()=>{
// //     alert("btn clicked !")
// // })

// btn1.ondblclick = (()=>{
//     console.log("btn dblclicked !")
// })

// btn1.onmouseover = (()=>{
//     console.log("btn hovered !")
// })

// btn1.onmouseenter = (()=>{
//     console.log("mouse entred !")
// })

// btn1.onmouseleave = (()=>{
//     console.log("mouse leaved !")
// })