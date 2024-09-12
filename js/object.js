let student1 = {
    name: "name 1",
    phone: 9766696550,
    email: 'student@example.com',
    regular: true,
    xyz: () => { 
        console.log("im from studnet object")
    },
    subjects : {
        maths : "xyz maths" ,
        science : "xyz",
        english : "xyz",
    }
}

student1.name = "amey"

console.log(student1.name)
console.log(student1.phone)
console.log(student1.email)

console.log(student1.subjects.maths)

student1.xyz()