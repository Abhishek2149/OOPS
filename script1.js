//object

//1 object literal
//function constructor
//ES6 class 
//Object.creat

//1 Object literal
let obj1 = {
    firstName : "Abhishek",
    lastName : "Jaybhaye",
    age : 23,
    rollNo : 65
}

let obj2 = {
    firstName : "Akash",
    lastName : "Shirsath",
    age : 23,
    rollNo : 59
}

console.log(obj1)
console.log(obj2)

//in this method there is repetation of code

//function constructor
function Person(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
}

let Abhishek = new Person("Abhishek","JAybhaye",23,65)
let Vishal = new Person("Vishal","Kadlag",22,73)
console.log(Abhishek)
console.log(Vishal)

//retrive
console.log(Abhishek.firstName)
console.log(Vishal["age"])

//add
Abhishek.city = "Sangamner"
Vishal["city"] = "Pune"
console.log(Abhishek)
console.log(Vishal)

//update
Abhishek.age = 24
Vishal["age"] = 23
console.log(Abhishek)
console.log(Vishal)

//delete
delete Abhishek.rollNo
delete Vishal.rollNo
console.log(Abhishek)
console.log(Vishal)

//3 ES6 Class
class Data  {
    constructor(fn,ln,ag,rn){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    }
}

let Swaraj = new Data("Swaraj","Kanawde",23,75)
console.log(Swaraj)

//Object.creat()

let Vikas = Object.create({})  //creating a blank object
console.log(Vikas)
Vikas.firstName = "Vikas"
Vikas.lastName = "Mandlik"
Vikas.age = 23
Vikas.rollNo = 18
console.log(Vikas)



//******************OOPS****************//

//1  Prototype Inheritance
function Person(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName  =ln
    this.age = ag
    this.rollNo = rn
    // this.display=function(){
    //     console.log(this.firstName+this.lastName)
    // }
}

let a1=new Person("Abhishek","Jaybhaye",23,65)
let a2 = new Person("Akash","Shirsath",23,59)
console.log(a1)
console.log(a2)
// a1.display()
// a1.display()

//this display property is getting attached with every object created using this function constructor
//to avoid this we use prototype inheritance
//Every object has one property: __proto__ === Parent.Prototype
//child object can inherit(use) parents Prototype


//as the display method is getting atached with every object we add it to parent through Prototype

Person.prototype.display=function(){
    console.log(this.firstName+this.lastName)
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