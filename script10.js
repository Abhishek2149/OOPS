//Polymorphism --- many forms
//same class  , same methodName , different signature --- overloading
class sum {
    addd(a, b) {
        console.log(a + b)
    }
    addd(a, b, c) {
        console.log(a + b + c)
    }
    addd(a, b, c, d) {
        console.log(a + b + c + d)           //it always consider last updated function
    }
}

let ad = new sum()
ad.addd(5, 6, 7, 8)
ad.addd(2,3)          //it will print NaN- not a number as a=2 b=3 c = undefined and d = undefined


class addition{
    sum(p,q,r,s){
        if(p!=undefined&&q!=undefined&&r!=undefined&&s!=undefined){
            console.log(p+q+r+s)
        }
        else if(p!=undefined&&q!=undefined&&r!=undefined){
            console.log(p+q+r)
        }
        else if(p!=undefined&&q!=undefined){
            console.log(p+q)
        }
    }
}

let a = new addition()
const Prompt =  require("prompt-sync")()
let l = Prompt("Enter l:")
let m = Prompt("Enter m:")
let n = Prompt("Enter n:")
let o = Prompt("Enter o:")
l = parseInt(l)
m = parseInt(m)
n = parseInt(n)
o = parseInt(o)
a.sum(l,m,n,o)

// different class , same method , same signature ---- overriding

class Student {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student{
    salary = 10000000
    display(){
        console.log("Welcome "+this.firstName + this.lastName)
    }
}

//display method is present in both parent and child class with same name and same signature
//insted of calling parents method the childs method will override it and exicute its own method

let Abhishek = new Teacher("Abhishek","Jaybhaye")
console.log(Abhishek.firstName)
console.log(Abhishek.lastName)
console.log(Abhishek.salary)
Abhishek.display()