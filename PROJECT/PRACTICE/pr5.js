let nums = [94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21]


let count = 0
let sum = 0
for(let i =0;i<nums.length;i++){
    if(nums[i]%2==0 && nums[i]%3 ==0){
        count = count+1
        sum = sum+nums[i]
        continue
    }

}
let average = sum/count
console.log(Math.floor(average))