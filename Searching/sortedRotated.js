//33. Search in Rotated Sorted Array

function sortedBrute(nums,target) {
    for(let i=0;i<nums.length;i++) {
        if(nums[i] === target) {
            return i;
        }
    } rteurn -1;
}

//binary search

function sortedEff(nums,target) {
      let low=0;
      let high=nums.length-1;
      while ( low <=high) {
        let mid = Math.floor((low+high)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] >= nums[low]) {
            if(target >= nums[low] && nums[mid] > target) high=mid-1;
            else low=mid+1;
        } else {
            if(target > nums[mid] && target <= nums[mid]) low=mid+1;
            else high=mid-1;
        }
    } return -1;
}

let nums = [4,5,6,7,0,1,2];
console.log(sortedBrute(nums, 0));
console.log(sortedEff(nums,0));