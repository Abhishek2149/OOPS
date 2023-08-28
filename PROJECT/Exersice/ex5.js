function trianglePattern(){

let str = ""

for(let i = 0;i<5;i++){
    for(let j = 0;j<i;j++){
        str = str + "*"
    }
    str += "\n"
}
console.log(str)
}

function stringPalindrome(){
 
let str1 = Prompt("Ener a string:")
s1 = str1.split("").reverse().join("")
console.log(s1)
if(str1 === s1){
    console.log("Palindrome")
}
else{
    console.log("Not a palindrome")
}
}

function numberPalindrome(){
let arr = Prompt("Enter a number:")
arr = parseInt(arr)

console.log(arr)


let convertsN = arr.toString()
let ns = convertsN.split("").reverse().join("")
console.log(convertsN)
console.log(ns)


if(ns == convertsN){
    console.log("Palindrome")
}
else{
    console.log("Not a palindrome")
}
}
const Prompt = require("prompt-sync")()

let inpt = Prompt("Which function you want to call (1,2,3):")
inpt = parseInt(inpt)

//calling required function
if(inpt==1){
    trianglePattern()
}
else if(inpt == 2){
    stringPalindrome()
}
else{
    numberPalindrome()
}