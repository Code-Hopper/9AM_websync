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

// events in js and eventhandelers

// click, dblclick, mouse event, key event, load , unload

// it is also a output statement
// document.write("this is docuemnt write statement !")

// // document.getElementsByTagName("h1")[0].style.color = "red"

// for (let element of document.getElementsByTagName("h1")) {
//     element.style.color = "red";
// }

// create element, delete element, append element

// let newElement = document.createElement("h2")

// newElement.innerText = "some text data `123 !"

// console.log(newElement)


// we must append child in a parent element only not in document
// document.getElementById("parent").appendChild(newElement)

// document.body.appendChild(newElement)


// let students = [
//     {name: "student 1" , phone: "1234567890" , class:"9A"},    {name: "student 2" , phone: "2134567890" , class:"9B"},
//     {name: "student 3" , phone: "3214567890" , class:"9C"},
//     {name: "student 4" , phone: "4321567890" , class:"9D"}
// ]

// let listParent = document.querySelector("#studentList")

// console.log(listParent)

// for(let student of students){
//     let newListItem = document.createElement("li")

//     newListItem.innerText = student

//     console.log(newListItem)

//     listParent.appendChild(newListItem)
// }

let students = [
    { name: "student 1", phone: "1234567890", class: "9A" }, { name: "student 2", phone: "2134567890", class: "9B", note: "work on grades" },
    { name: "student 3", phone: "3214567890", class: "9C", note: "do more work" },
    { name: "student 4", phone: "4321567890", class: "9D" }
]

let table = document.getElementById("studentTable")

// for(let student of students){

//     let newRow = document.createElement('tr')

//     newRow.innerHTML = `<td>${student.name}</td> <td>${student.phone}</td> <td>${student.class}</td>`

//     table.appendChild(newRow)

// }

// students.forEach((student) => {
//     let newRow = document.createElement('tr')

//     newRow.innerHTML = `<td>${student.name}</td> <td>${student.phone}</td> <td>${student.class}</td> <td>${student.note}</td>`

//     table.appendChild(newRow)
// })

students.forEach((student) => {
    let newRow = document.createElement('tr')

    for(let key in student){
        let newColumn = document.createElement("td")
        newColumn.innerText = student[key]
        newRow.appendChild(newColumn)
    }

    table.appendChild(newRow)
})