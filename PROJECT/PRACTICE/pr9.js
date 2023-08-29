let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

function mergeSortedArray(nums1,m,nums2,n){
nums1 = nums1.slice(0,m);
nums1 = nums1.concat(nums2.slice(0,n));
nums1.sort((a,b) => a-b);
return nums1;
}

let b = mergeSortedArray(nums1,m,nums2,n)
console.log(b)

console.log(1+1)
console.log(1+"1")
console.log("1"+1)
console.log("1"+"1")