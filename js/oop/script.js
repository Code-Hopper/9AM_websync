// Math, Date | pre built classes 

// syntax
class animal{

    // properties
    legs= 0
    color= "color"
    skin= "skin"
    type= "type"
    name= "name"

    // methods
    walk(){
        console.log("animal can walk")
    }
    run(){
        console.log("animal can run")
    }
    eat(){
        console.log("animal can eat")
    }
    sleep(){
        console.log("animal can sleep")
    }

    canFly(){
        if(this.type == "air"){
            console.log("animal can fly")
        }else{
            console.log("animal can't fly")
        }
    }
}

let obj1 = new animal()

console.log(obj1.name,obj1.legs,obj1.color,obj1.skin,obj1.type)

obj1.name = "dog"
obj1.legs = 4
obj1.color= "brown"
obj1.skin = "fur"
obj1.type = "air"

console.log(obj1.name,obj1.legs,obj1.color,obj1.skin,obj1.type)

obj1.walk()
obj1.eat()
obj1.sleep()
obj1.run()
obj1.canFly()

let obj2 = new animal()

obj1.name = "fish"
obj1.legs = 0
obj1.color= "green"
obj1.skin = "scales"
obj1.type = "water"

console.log(obj1.name,obj1.legs,obj1.color,obj1.skin,obj1.type)

obj1.walk()
obj1.eat()
obj1.sleep()
obj1.run()
obj1.canFly()