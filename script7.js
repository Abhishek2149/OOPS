/*
*************************************INHERITANCE*************************************************

we can acess elements (methods and properties) of parent object on the reference of child object.
means child can inherit (use) properties and methods of parent
*/

//program 1

class Student {
    firstName = "Abhishek"
    lastName = "Jaybhaye"
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class Teacher {
    firstName = "Abhishek"
    lastName = "Jaybhaye"
    salary = 50000
    displayName() {
        console.log(this.firstName + this.lastName)
    }
    displaySalary() {
        console.log(this.salary)
    }
}

//let Abhishek = new Teacher()
//Abhishek.displayName()
//Abhishek.displaySalary()

// let Abhishek = new Student()

// Abhishek.displayName()


//program 2 

class StudentA {
    firstName = "Abhishek"
    lastName = "Jaybhaye"
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class TeacherA extends StudentA {
    salary = 50000
    displaySalary() {
        console.log(this.salary)
    }
}

let Abhishek1 = new TeacherA()
Abhishek1.displayName()
Abhishek1.displaySalary()
console.log(Abhishek1.firstName)
console.log(Abhishek1.lastName)
console.log(Abhishek1.salary)

//program 3
//parent having coustructor
class StudentB {
    constructor(fn, ln, adNo) {
        this.firstName = fn
        this.lastName = ln
        this.adharNo = adNo
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class TeacherB extends StudentB {
    salary = 60000
    displaySalary() {
        console.log(this.salary)
    }
}

let Akash = new TeacherB("Akash", "Shirsath", 123)
console.log(Akash.firstName)
console.log(Akash.lastName)
console.log(Akash.salary)
console.log(Akash.adharNo)
Akash.displayName()
Akash.displaySalary()


//program 4
//parent and child both having constructor

class StudentC {
    constructor(fn, ln, adNo) {
        this.firstName = fn
        this.lastName = ln
        this.adharNo = adNo
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class TeacherC extends StudentC{
    constructor(fn,ln,adNo,sal){
        super(fn,ln,adNo)
        this.salary = sal
    }
    displaySalary(){
        console.log(this.salary)
    }
}

let Rohan = new TeacherC("Rohan","Jundare",321,45000)
console.log(Rohan.firstName)
console.log(Rohan.lastName)
console.log(Rohan.adharNo)
console.log(Rohan.salary)
Rohan.displayName()
Rohan.displaySalary()