// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

let nums1 = [],m =0
let nums2 = [1],n=1
var arr = []
for(let i = 0;i<m;i++){
    if(i<m){
        arr[i]= nums1[i]
    }
}
for(let i = m;i<m+n;i++){
    if(i<m+n){
        arr[i] = nums2[Math.abs(m-i)]
        continue
    }
}
console.log(arr.sort())


let str = "abhishek"

console.log(str.indexOf("abh"))