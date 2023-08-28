//1 to 10

function numOneToTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}
numOneToTen()

//print all the elements of given 2D array

// function print2Darray(arr){
//     for(let i =0;i<arr.length;i++){
//         for(let j = 0;j<arr[i].length;j++){
//             console.log(arr[i][j])
//         }
//     }
// }
// let arr = [[1,2],[3,4],[5,6]]
// print2Darray(arr)

//write code to print even numbers from given array
const Prompt = require("prompt-sync")()

function creatArray() {
    var arr1 = []
    let size = Prompt("Enter Length of Array: ")
    size = parseInt(size)
    console.log(size)
    for (let i = 0; i < size; i++) {
        arr1[i] = parseInt(arr1[i] = Prompt("Enter array Element at " + i + " index: "))
    }
return arr1
}
let arr1 = creatArray()
console.log(arr1)

function evenNumbersOfArray(arr1){
    let evenArray=[]
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]%2==0){
        evenArray.push(arr1[i])
        }
    }
    return evenArray;
}
let evenArray = evenNumbersOfArray(arr1)
console.log(evenArray)

