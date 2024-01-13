function floorCeil(arr, x) {
    let low=0;
    let high=arr.length-1;
    let floor=-1, ceil=-1
    for(let num of arr) {
        let mid=Math.floor((low+high)/2);
        if(arr[mid] === x) {
            floor=mid;
            ceil=mid;
            return [floor, ceil];
        } else if(arr[mid] > x) {
            ceil=mid;
            high=mid-1;
        } else {
            floor=mid;
            low=mid+1;
        }
    }  return [floor, ceil];
}
let arr=[5, 6, 8, 9, 6, 5, 5, 6];
console.log(floorCeil(arr, 6));