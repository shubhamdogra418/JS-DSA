// 217. Contains Duplicate

function containsArr (nums) {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1 ;j<nums.length; j++) {
            if(nums[i]===nums[j]) return true;
        }
    } return false;
}

function ContainsDup (nums) { //O(1), O(n)
    const mySet =  new Set();
    for( let num of nums) {
        if(mySet.has(num)) return true;
        else mySet.add(num);
    } return false;

}
nums = [1,2,3,4];
console.log(ContainsDup(nums));
console.log(containsArr(nums));