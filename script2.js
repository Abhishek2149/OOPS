//******************OOPS****************//

//1  Prototype Inheritance
function Person(fn, ln, ag, rn) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
    // this.display=function(){
    //     console.log(this.firstName+this.lastName)
    // }
}

let a1 = new Person("Abhishek", "Jaybhaye", 23, 65)
let a2 = new Person("Akash", "Shirsath", 23, 59)
console.log(a1)
console.log(a2)
// a1.display()
// a1.display()

//this display property is getting attached with every object created using this function constructor
//to avoid this we use prototype inheritance
//Every object has one property: __proto__ === Parent.Prototype
//child object can inherit(use) parents Prototype


//as the display method is getting atached with every object we add it to parent through Prototype

Person.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}

a1.display()
a2.display()

//Every object has one property: __proto__ === Parent.Prototype

console.log(a1.__proto__ === Person.prototype)
console.log(a2.__proto__ === Person.prototype)

Person.prototype.Country = "India"
console.log(a1)
console.log(a2)

console.log(a1.Country)
console.log(a2.Country)

console.log(a1 instanceof Person)     //it shows a1 & a2  made from Person
console.log(a2 instanceof Person)     // ie a1 & a2 are child of Person

console.log(a1.hasOwnProperty('firstName'))
console.log(a1.hasOwnProperty('Country'))   //it will be false as we added country through Prototype

class PersonA {
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }
    display(){
        console.log(this.firstName + this.lastName)          
    }
}

let a3 = new PersonA("Abhishek", "Jaybhaye",23,65)   
console.log(a3)
a3.display()

//display method is getting attached with new object created with PersonA class we just write it outside of constructor