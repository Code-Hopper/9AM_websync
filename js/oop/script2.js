class animal {

    name = ""
    type = ""
    canFly = false
    canSwim = false
    canWalk = false
    legs = 0
    color = ""

    // constructor is a function which get called whenever a new object is created

    // are used in collectig user inputs

    constructor(name,type,canFly,canSwim,canWalk,legs,color){
        console.log("constructor called !")
        this.name = name 
        this.type = type 
        this.canFly = canFly 
        this.canSwim = canSwim 
        this.canWalk = canWalk 
        this.legs = legs 
        this.color = color 
    }

    walk() {
        if (this.canWalk) {
            console.log(`${this.name} is walking !`)
        } else {
            console.log(`${this.name} can't walk !`)
        }
    }

    eat() {
        console.log(`${this.name} is eating !`)
    }

    sleep() {
        console.log(`${this.name} is sleeping !`)
    }

    swim() {
        if (this.canSwim) {
            console.log(`${this.name} is swiming !`)
        } else {
            console.log(`${this.name} can't swim !`)
        }
    }
    

    fly() {
        if (this.canFly) {
            console.log(`${this.name} is flying !`)
        } else {
            console.log(`${this.name} can't fly !`)
        }
    }

    display(){
        console.log("Animal Name is : ", this.name)
        console.log("No. of legs : ", this.legs)
        console.log("Animal color is : ", this.color)
        console.log("Animal  is ", this.type, " type !")
    }
    
}

let a1 = new animal("fish","water",false,true,false,0,"golden")
a1.display()

a1.eat()
a1.sleep()
a1.walk()
a1.fly()
a1.swim()


// let a2 = new animal()

// // a2.name = "horse"
// // a2.legs = 4
// // a2.canSwim = true
// // a2.canFly = false
// // a2.canWalk = true
// // a2.color = "white"
// // a2.type = "land"

// a2.display()

// a2.eat()
// a2.sleep()
// a2.walk()
// a2.fly()
// a2.swim()

// let a3 = new animal()

// // a3.name = "bird"
// // a3.legs = 2
// // a3.canSwim = false
// // a3.canFly = true
// // a3.canWalk = true
// // a3.color = "white"
// // a3.type = "air"

// a3.display()

// a3.eat()
// a3.sleep()
// a3.walk()
// a3.fly()
// a3.swim()