//Pivot number from 1 to entered number n;

const Prompt = require("prompt-sync")()
function pivotNumber(n) {
    let p = Math.sqrt((n * n + n) / 2)

    if (Number.isInteger(p)){
        return p
    }
    else{
        return -1;
    } 
}
let n = Prompt("Enter a number: ")
n = parseInt(n)
let pivot = pivotNumber(n)
console.log(pivot)