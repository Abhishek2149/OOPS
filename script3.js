let Abhishek = {
    firstName:"Abhishek",
    lastName:"Jaybhaye",
    display:function(){
        console.log(this.firstName+this.lastName)
    }
}

let Akash = {
    firstName:"Akash",
    lastName:"Shirsath",
    display:function(){
        console.log(this.firstName+this.lastName)
    }
}
console.log(Abhishek)
console.log(Akash)

Abhishek.display()
Akash.display()

//there is repetation of code to avoide this we use
/*
1--function constructor
2--ES6 class
3--Object.creat
*/

//1--function constructor

function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
//     this.display = function(){
//         console.log(this.firstName + this.lastName)
//     }
}

let Abhishek1 = new Person("Abhishek1","Jaybhaye1")
let Akash1 = new Person("Akash1","Shirsath1")

console.log(Abhishek1)
console.log(Akash1)

// Abhishek1.display()
// Akash1.display()

//in this the display method is getting attached to every object created with this function constructor
//to avoid this we use prototype inheritance

//Every object has one property __Proto__ === Parent.prototype

console.log(Abhishek1.__proto__ === Person.prototype)
console.log(Akash1.__proto__ === Person.prototype)

//so we use that property and disply method will be written with Prototype

Person.prototype.display=function(){
    console.log(this.firstName + this.lastName)
}

Abhishek1.display()
Akash1.display()

//similerly we can add property as well

Person.prototype.country = "India"
console.log(Abhishek1.country)
console.log(Akash1.country)

//hasOwnProperty -- the properties added with prototype are own by parent only child can only acess them
console.log(Abhishek1.hasOwnProperty("country"))
console.log(Akash1.hasOwnProperty("firstName"))

//istanceOf --- it shows that this objects are created with parent Person
console.log(Abhishek1 instanceof Person)
console.log(Akash1 instanceof Person)

//2--ES6 class

class PersonA{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}

let Abhishek2 = new PersonA("Abhishek2","Jaybhaye2")
console.log(Abhishek2)
Abhishek2.display()   //in this case also display method is getting attached to every object created with parent PersonA
//in ES6 class to put something in prototype, just write it outside of constuctor and don't use function keyword