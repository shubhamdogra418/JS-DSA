//540. Single Element in a Sorted numsay
function singleEL(nums) {
    if(!nums.length) return "empty array";
    if(nums[0] !== nums[1]) {
        return nums[0];
    }
    if(nums[nums.length-1] !== nums[nums.length-2]) {
        return nums[nums.length-1];
    }
    
    for(let i=1;i<nums.length-1;i++) {
        if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]) return nums[i];
    } 
    return -1;
}

//using XOR
    function xoruse (nums) {
        return nums.reduce((a,b)=> a^b);
    }

//O(n), for loop
    function looping (nums) {
        for(let i=0;i<nums.length;i+=2) {
            if(nums[i] !== nums[i+1]) return nums[i];
        } return -1;
    }

//binary search
function singleElBS(nums) {
    let low=0;
    let high=nums.length-1;
    if(!nums.length) return -1;
    if(nums[0] !== nums[1]) {
        return nums[0];
    }
    if(nums[nums.length-1] !== nums[nums.length-2]) {
        return nums[nums.length-1];
    }
    while(low<=high) {
        let mid=Math.floor((low+high)/2);
        if(nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]) {
            return nums[mid];
        } else if(nums[mid] !== nums[mid-1] && nums[mid] === nums[mid+1]) {
            high=mid-1;
        } else low=mid+1;
    } return -1;
}
let nums = [2,2,7,7,10,10,11,11,12];
// console.log(singleEL(nums));
// console.log(singleElBS(nums));
console.log(xoruse(nums));
console.log(looping(nums));