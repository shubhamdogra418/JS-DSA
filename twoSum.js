function twoSum (arr, target) {
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]+arr[i-1] === target) return [i-1,i];
        else return [-1,-1];
        
    }
}
let arr=[2,7,11,15];
let target=9;
console.log(twoSum(arr, target));