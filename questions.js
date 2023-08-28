const Prompt = require("prompt-sync")()

let bottom = Prompt("Enter a bottom flower:")
let top= Prompt("Enter a Top flower:")
let num = Prompt("Number of special Fowers:")
var special = []
for(let i = 0;i<num;i++){
    special[i]=Prompt("Enter a Special Flower:")
    
}
//special = parseInt(special)
[a,b] = special
a = parseInt(a)
b = parseInt(b)
bottom = parseInt(bottom)
top = parseInt(top)
// console.log(bottom)
// console.log(a)
// console.log(b)

let x = top-b
let y = b-a-1
let z = a-bottom
if(x>y&&x>z){
    console.log("Number of cosecutive floors = "+x)
}
else if(y>x&&y>z){
    console.log("Number of cosecutive floors = "+y)
}
else{
    console.log("Number of cosecutive floors = "+z)
}







//
// let a = [[1,3,3],[4,5,3],[7,3,9]]
// let count = 0
// for (let i = 0;i<a.length;i++){
//     //console.log(a[i])
//     for(let j = 0;j<a[i].length;j++){
//         //console.log(a[i][j])
//         if(a[i][j]==3){
//             count = count +1
//             continue
//         }
//     }
// }
// console.log(count)


// let input = Prompt("Enter set of numbers seperated by , :")
// console.log(input)

// let arr = input.split(",")


// console.log(arr)

let arr = [5,3,4,4,7,3,6,11,8,5,11]
let i =0
let it = 0
for(i = 0;i<arr.length;i++){
   // console.log(i)
   if(arr[i]<arr[i-1]){
    it=1+it
    continue
   }
    
}
console.log(it)
let r = 0
let capaity = [2,3,4,5]
let rocks  = [1,2,4,4]
for(let i =0;i<capaity.length;i++){
    let x = capaity[i]-rocks[i]
    if(x>=1){
        r=r+1
        continue
    }
}
console.log(r)

let str = Prompt("Enter a string:\n")
let char = Prompt("Enter a Character:\n")

let sum = 0
for(let i=0;i<str.length;i++){
    if(str[i]==char){
        sum=sum+1
        continue
    }
}

let out = (sum*100)/str.length
console.log(out)

