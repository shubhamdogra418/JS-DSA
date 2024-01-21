//219. Contains Duplicate II
function containsDupArr2 (nums, k) { //O(n2)
    for (let i = 0; i < nums.length; i++) {
		for (let j=i+1; j<=i+k && j<nums.length; j++) {
			if (nums[i] === nums[j]) return true;
		}
	} return false;
}

function containsDupMap2(nums, k) { //O(1), O(n)
    let map= new Map();
    for(let i=0;i<nums.length;i++) {
        if(i - map.get(nums[i]) <= k) return true;
        else map.set(nums[i],i);
    } return false;
}

function window(nums, k) {
    let mySet= new Set();
    for(let i=0; i<nums.length; i++) {
        if(mySet.has(nums[i])) return true;
        else mySet.add(nums[i]);
        //keep the window's size limited
        if(mySet.size > k) mySet.delete(nums[i-k]); //deleting the first one element
    } return false;

}

nums = [1,0,1,1], k = 1
console.log(containsDupArr2(nums, k));
console.log(containsDupMap2(nums, k));
console.log(window(nums,k));