function sqrt (x) {
    let low=1;
    let high=x;
    let ans=null;
    while (low<=high) {
        let mid=Math.floor((low+high)/2);
        if (mid*mid > x) {
            high=mid-1;
        } else if(mid*mid < x) {
            ans=mid;
            low=mid+1;
        } else {
            return mid;
        }
    } return ans;
}
// console.log(sqrt(8));

//28. Find the Index of the First Occurrence in a String
function firstOcc (haystack, needle) {
    
}
let haystack = "sadbutsad", needle = "sad";
// console.log(firstOcc(haystack, needle));

function insertPos(nums,target) {
    let low=0;
    let high=nums.length-1;
    while(low <= high) {
        let mid=Math.floor((low+high)/2);
        if(target === nums[mid]) {
            return mid;
        } else if(target > nums[mid]) {
            low=mid+1;
        } else {
            high=mid-1;
        }
    } return low;
}
// let nums = [1,3,5,6];
// console.log(insertPos(nums, 2));

//153. Find Minimum in Rotated Sorted Array O(n)
// function rotated(nums) {    
//     for(let i=1;i<nums.length;i++) {
//         if(nums[i] < nums[i-1] && nums[i] < nums[i+1]) {
//             return nums[i];
//         }
//     } return -1;
// }

//optimised solution O(logn)
function findMin(nums) {
    let low=0;
    let high=nums.length-1;
    let ans=Number.MAX_VALUE;
    while(low <= high) {
        let mid= Math.floor((low+high)/2);
        if(nums[low] <= nums[mid]) {
            ans=Math.min(nums[low], ans)
            low=mid+1;
        } else {
            ans=Math.min(ans, nums[mid]);
            high=mid-1;
        }
    } return ans;
}

let nums = [4,5,6,7,0,1,2];
console.log(findMin(nums));