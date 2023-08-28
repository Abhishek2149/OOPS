// //single inheritance
// class Student {
//     constructor(fn, ln, adNo) {
//         this.firstName = fn
//         this.lastName = ln
//         this.adharNo = adNo
//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 60000
//     displaySalary() {
//         console.log(this.salary)
//     }
// }

// let Akash = new Teacher("Akash", "Shirsath", 123)
// console.log(Akash.firstName)
// console.log(Akash.lastName)
// console.log(Akash.salary)
// console.log(Akash.adharNo)


// //Multi-level inheritance

// class GrandFather {
//     constructor(fn,ln){
//         this.GrandFatherFirstName = fn
//         this.lastName = ln
//     }
//     displayGName(){
//         console.log(this.GrandFatherFirstName + this.lastName)
//     }
// }

// class Father extends GrandFather{
//     constructor(fn,ln,ffn){
//         super(fn,ln)
//         this.fatherFirstName = ffn
//     }
//     displayFName(){
//         console.log(this.fatherFirstName + this.lastName)
//     }
// }

// class Son extends Father{
//     constructor(fn,ln,ffn,sfn){
//         super(fn,ln,ffn)
//         this.SonFirstName = sfn
//     }
//     displaySName(){
//         console.log(this.SonFirstName + this.lastName)
//     }
// }
// let Abhishek = new Son("Mahadu","Jaybhaye","Suresh","Abhishek")
// console.log(Abhishek.GrandFatherFirstName)
// console.log(Abhishek.fatherFirstName)
// console.log(Abhishek.SonFirstName)
// Abhishek.displayGName()
// Abhishek.displayFName()
// Abhishek.displaySName()

//Hirearchical inheritance
class Father {
    constructor(fn,ln){
        this.FatherFirstName = fn
        this.lastName = ln
    }
    displayFatherName(){
        console.log(this.FatherFirstName + this.lastName)
    }
}

class Son extends Father{
    constructor(fn,ln,sfn){
        super(fn,ln)
        this.SonFirstName = sfn
    }
    displaySonName(){
        console.log(this.SonFirstName + this.lastName)
    }
}

class Daughter extends Father{
    constructor(fn,ln,dfn){
        super(fn,ln)
        this.DaughterFirstName = dfn
    }
    displayDaughterName(){
        console.log(this.DaughterFirstName + this.lastName)
    }
}

let Abhishek = new Son("Suresh","Jaybhaye","Abhishek")
let Prajakta = new Daughter("Suresh","Jaybhaye","Prajakta")
Abhishek.displaySonName()
Prajakta.displayDaughterName()