//Object.creat
let a = Object.create({})  //creating a blank object
console.log(a)


//Adding elements to blank object created with Object.create
a.firstName = "Abhishek"
a.lastName = "Jaybhaye"
a.age = 23
a.rollNo = 65
a.display=function(){
    console.log(this.firstName + this.lastName)
}
console.log(a)
a.display()

let Obj = {
    init:function(fn,ln,ag){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let Abhishek = Object.create(Obj)

console.log(Obj)
console.log(Abhishek) //blank object
Abhishek.init("Abhishek","Jaybhaye",23)  //adding elements to object
console.log(Abhishek)
Abhishek.display()

//we will lwrn oops with ES6 class

//Types of writing ES6 class

//1 harddcoded - this will give same valuse for every object created
class info1 {
    firstName = "Abhishek"
    lastName = "Jaybhaye"
    age = 23
    display(){
        console.log(this.firstName + this.lastName)
    }
}

let Ab = new info1()
console.log(Ab.firstName)
let b= new info1()
console.log(b.lastName)

//2 Using Constructor
class info2 {
    constructor(fn,ln,ag){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let Abhishek1 = new info2("Abhishek","Jaybhaye",23)
console.log(Abhishek1.firstName)
console.log(Abhishek1.lastName)
Abhishek1.displayName()

//3 Set method
class info3 {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}

let Akash = new info3()
console.log(Akash)
Akash.setFirstName("Akash")
Akash.setLastName("Shirsath")
console.log(Akash)
Akash.display()


//4 Set property

class info4 {
    set FirstN(fn){
        this.firstName = fn
    }
    set LastN(ln){
        this.lastName = ln
    }
    set Age(ag){
        this.age = ag
    }
    get FirstN(){
        return this.firstName
    }
    get LastN(){
        return this.lastName
    }
    get Age(){
        return this.age
    }
}

let Rohan = new info4()
Rohan.FirstN = "Rohan"
Rohan.LastN = "Jundare"
Rohan.Age = 23
console.log(Rohan.FirstN)
console.log(Rohan)