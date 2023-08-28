const Input = require("prompt-sync")()
let s = Input("Enter a String:")
function largestCharacter(){
    let hold = ""
for(let i = 0;i<s.length;i++){
    
    if(s[i].toLowerCase()!=s[i] && (s.includes(s[i].toLowerCase()))){
        hold = hold>s[i]?hold:s[i]
    }  
}
console.log(hold)
}
largestCharacter(s)

//
const Prompt = require("prompt-sync")()
let speedInkm = Prompt("Enter a speed in km/hr:")
speedInkm = parseInt(speedInkm)

let speedInmeter = (speedInkm*5/18)
let dist = Prompt("Enter a distance in meters:")
let timeInseconds = dist/speedInmeter
console.log("Time required to travel "+dist+" is "+timeInseconds+" sec.")