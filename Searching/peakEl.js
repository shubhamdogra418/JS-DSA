// 162. Find Peak Element
function peakElBrute(nums) {
    let ans=-1;
    for(let i=0; i<nums.length-1; i++) { //O(n)
        if(nums[i+1] > nums[i]) {
            ans=Math.max(nums[i+1], ans);
        }
    } return nums.indexOf(ans); //o(nlogn)
}

//binary search
function peakElEff (nums) {
    let low=0;
    let high=nums.length-1;
    while(low <= high) {
        let mid=Math.floor((low+high)/2);
        if( mid >0 && nums[mid] < nums[mid-1]) {
            high=mid-1;
        } else if(mid < nums.length && nums[mid] < nums[mid+1]) {
            low=mid+1;
        } else return mid;
    } return -1;
}

let nums = [1,2,1,3,5,6,4];
console.log(peakElBrute(nums));
console.log(peakElEff(nums));