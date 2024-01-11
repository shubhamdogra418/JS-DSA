


//Binary Search In JavaScript
function binarySearch (arr,target) {
    let low=0;
    let high=arr.length-1;
    while(low <= high ) {
        let mid= Math.floor((low+high)/2);
        if(target === arr[mid]) {
            return mid;
        } else if(target > arr[mid]) {
            low=mid+1; 
        } else {
            high=mid-1;
        }
    } return -1;
}

let arr=[1, 4, 6, 9, 12, 15];
// console.log(binarySearch(arr, 15));

//Binary Search using Recursion

function binarySearchRec (arr,target) {
    return helper(arr, target,0, arr.length);
}

function helper(arr, target, low,high) {
    let mid= Math.floor((low+high)/2);

    while (low <= high) {

        if (arr[mid] === target) {
            return mid;
        }
        else if(arr[mid] < target) {
            return helper(arr, target, mid+1,high);
        } 
        else {
            return helper(arr,target, low, mid-1);
        }
    } return -1;
}

console.log(binarySearch(arr, 10)); 

//Find floor (smallest) and ceil (highest) value of X in an array
