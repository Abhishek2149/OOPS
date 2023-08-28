let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
nums1 = nums1.slice(0,m);
nums1 = nums1.concat(nums2.slice(0,n));
nums1.sort()
console.log(nums1)