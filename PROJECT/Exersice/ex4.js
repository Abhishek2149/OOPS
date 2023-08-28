// let str = ''
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         str += "*"
//     }
//     str += "\n"
// }
// console.log(str)


const Prompt = require("prompt-sync")()

function ConstructWays() {
    if (n == 1)
        return 4;
    let countB = 1, countS = 1, prevB, prevS;

    for (let i = 2; i <= n; i++) {
        prevB = countB
        prevS = countS

        countS = prevB + prevS
        countB = prevS
    }
    let result = countB + countS
    return (result * result)
}

let n = Prompt("Enter value of n:")

let a = ConstructWays(n)
console.log("Count of ways for " + n + " section is " + a)


