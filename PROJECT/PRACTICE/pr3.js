//a^2 = b^2 + c^2  if present return yes otherwise return no

let arr = [3, 2, 4, 6, 5]
let arr2 = []
for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * arr[i])
}
arr2 = arr2.sort(function (a, b) { return a - b }); //arranging array in assending order

arr2 = arr2.reverse()
console.log(arr2)
function pyTha(arr2) {
    let count = 0
    for (let i = 0; i < arr2.length; i++) {
        for (let j = i + 1; j < arr2.length; j++) {
            for (let k = j + 1; k < arr2.length; k++) {
                // console.log(arr[i]*arr[i])
                // console.log(arr[j]*arr[j])
                // console.log(arr[k]*arr[k])
                // console.log(arr2[i])
                // console.log(arr2[i])
                // console.log(arr2[i])
                if (arr2[i] == arr2[j] + arr2[k]) {
                    count = count +1
                }

            }
        }
    }
    if (count>=1){
        return "Yes"
    }
    else{
        return "No"
    }
}
let pr = pyTha(arr2)
console.log(pr)