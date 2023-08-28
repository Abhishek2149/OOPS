//Lexical scope -- we can access element s variables declered in the parent funtion to the child function

function Addition() {
    let a = 12
    let b = 13
    console.log(a + b)
    function AdditionA() {
        let c = 25
        let d = 5
        console.log(a + b)
        console.log(a + b + c + d)
        function AdditionC() {
            console.log(c + d + a)
        }
        AdditionC()
    }
    AdditionA()
}
Addition()


function Sum() {
    let a = 45
    let b = 48
    console.log(a + b)
    function SumA() {
        let c = 90
        let d = 7
        console.log(a + b + c + d)
        function SumC() {
            let k = 5
            console.log((a + b + c + d) / k)
        }
        SumC()
    }
    SumA()
}
Sum()


//Closurus

function getWord(word){
    console.log("Hello "+word)
    return "Hello " + word
    console.log("bye")           //function will not exicute part written after "return"
}
let a1 = getWord("Abhishek")
console.log(a1)



//Types of function
//function decleration

function Abhishek(name){
    console.log("MY Name is "+name)
}
Abhishek("Abhishek")


//function expression
let ad = function(x,y){
    return x+y
}
console.log(ad)
let c = ad(5,6)
console.log(c)

//arrow function
//1
let add = (p,q)=>{
    return p+q
}
let k =add(8,6)
console.log(k)

//2 if block is only single line no bracket needed

let addb = (r,n)=>r+n

let v = addb(52,48)
console.log(v)
