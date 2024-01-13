//34. Find First and Last Position of Element in Sorted numsay

// function firstLast(nums, target) {
//     let low=0;
//     let high=nums.length-1;
//     let start=-1, last=-1;
//     //making two linear searches ---O(n)
//     for(let i=0;i<nums.length;i++) {
//         if(nums[i]===target) {
//             start=i;
//             break;
//         } else start=-1;
//     }
//     for(let i=nums.length; i>=0; i--) {
//         if(nums[i]===target) {
//             last=i;
//             break;
//         } else last[i]=-1;
//         }
//         return [start, last];
//     }
    
//binary search
function usingBS(nums , target) {
    let ans=[-1,-1];
    let low=0;
    let high=nums.length-1;
    while(low<=high) {
        let mid=Math.floor((low+high)/2);
        if(nums[mid] === target) {
            //1st occurence
            ans[0]=mid;
            high=mid-1;
        } else if(nums[mid] < target) {
            low=mid+1;
        } else high=mid-1;
    } 
    low=0;
    high=nums.length-1;
    while(low<=high) {
        let mid=Math.floor((low+high)/2);
        if(nums[mid] === target) {
            //2nd occurence
            ans[1]=mid;
            low=mid+1;
        } else if(nums[mid] < target) {
            low=mid+1;
        } else high=mid-1;
    } 
    return [ans[0],ans[1]];
}

let nums = [5,7,7,8,8,10];
// console.log(firstLast(nums, 8));
console.log(usingBS(nums, 8));