// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.



// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

let nums = [1]
let m = 1
var arr = [];
var res = [];
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + 1 && j < nums.length; j++) {
        for (let k = j + 1; k <= j + 1 && k < nums.length; k++) {
            // console.log(i)
            // console.log(j)
            // console.log(k)
            // console.log(nums[i])
            // console.log(nums[i])
            // console.log(nums[j])
            // console.log(nums[k])
            arr.push(nums[i])
            arr.push(nums[j])
            arr.push(nums[k])
            console.log(arr)
            arr.sort()
            console.log(arr)
            res.push(arr[m-1])
            arr=[]
        }
    }
}
// arr.push(nums[0])
// arr.push(nums[1])
// arr.push(nums[2])
// arr.push(nums[3])
// arr.push(nums[4])
// console.log(arr)



console.log(res)