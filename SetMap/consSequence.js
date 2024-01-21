//
function longestSeq(nums) { //O(nlogn)
    nums.sort((a,b)=> a-b);
    if(nums.length ===0 ) return 0;
    let count=1;
    let max=1;
    for(let i=0;i<nums.length;i++) {
        if(nums[i] - nums[i-1] === 1) {
            count++;
            max=Math.max(count, max);
        } else if(nums[i]===nums[i-1]) continue;
        else count=1;
    }  return max;
}

function longestSet(nums) {
    const set= new Set(nums);
    let max=0;
    for(let num of set) {
        // if(set.has(num-1)) continue;
        let count=1;
        let currNum=num;
        while(set.has(currNum+1)) {
            count++;
            currNum++;
        };
        max=Math.max(count,max);
    } 
    return max;
}
nums = [0,3,7,2,5,8,4,6,0,1]
console.log(longestSeq(nums));
console.log(longestSet(nums));