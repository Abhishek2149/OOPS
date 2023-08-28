let arr = [1,3,6,10,12,15,16,24,36]
let sum = 0
let count = 0
for(let i = 0;i<arr.length;i++){
    if(arr[i]%2==0&&arr[i]%3==0){
        sum = sum + arr[i]
        count = count + 1
        continue
    }
}
let result = sum/count
console.log(result)