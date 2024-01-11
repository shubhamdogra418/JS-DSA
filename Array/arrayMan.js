// https://github.com/FrontendFreaks/DSA-in-JavaScript/tree/main/Array

let anything=[1,2,3, "Hello", {name: "shubham"}, [5,6,7]];
// console.log(anything[anything.length-1]);

let arr=[10,20,30,40,50];
//remove the last element from an array?
// console.log(arr.pop());

// //add an element to the end of an array?
// arr.unshift(5);

// //remove the first element from an array?
// arr.shift();
// console.log(arr);

// //loop through an array in JavaScript?
// for(let i=0;i<arr.length;i++) {
//     console.log(arr[i]);
// }
// //for of loop
// for( let item of arr) {
//     console.log(item);
// }
// //for each loop
// arr.forEach((x, i) => {
//     console.log(i,"=>", x);
// })


//How do you check if an element exists in an array?
function isExist (arr,target) {
    for(let item of arr) {
        if(item === target) {
            return true;
        } 
    } return false;
}
// console.log(isExist(arr, 40));
// console.log(arr.includes(40));

//How do you find the index of an element in an array?
const findIndex= (arr, target) => {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]=== target) {
            return i;
        }
    } return -1;
}
// console.log(findIndex(arr, 40));
// console.log(arr.indexOf(30));

//How to delete, add & update elements from a specific index?
// console.log(arr.slice(1,3)); //20,30
// arr.splice(1,2,60,70);
// console.log(arr);


/*
Shallow Copy of Array 
A shallow copy of an object is a copy whose properties share the same references 
(point to the same underlying values) as those of the source object from which the copy was made. 
As a result, when you change either the source or the copy, you may also cause the other object to change too
*/

let arrB= arr;
// arrB.splice(1,3);
// console.log(arrB, arr);


/*
Deep Copy of Array
A deep copy creates a completely new object or array, including copies of all nested elements. 
Changes made to the deep copy won't affect the original object. 
const originalArray = [1, 2, [3, 4]]; const deepCopy = JSON. parse(JSON
*/

const arrC= [...arr];
const arrD= Array.from(arr);
const arrE= arr.concat();
arrC.splice(1,3);
arrD.splice(1,3);
arrE.splice(1,2);
// console.log(arrC,arrD,arrE);

//How to concatenate two arrays in JavaScript?
const newArr= [...arrB, ...arrC]; //spread operator
const newArr2= arrD.concat(arrE);
// console.log(newArr, newArr2);

//How can you check if two arrays are equal?
let arr1= [10,20,30,40,50];
let arr2= [10,20,30,40,50];
function lengthEqual (arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false; 
    } 
    for(let i=0;i<arr1.length;i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    } return true;
}
// console.log(lengthEqual(arr1, arr2));

// How to sort an array in ascending and descending order?
const x = [1, 4, 6, 0, -9, -5];
// console.log(x.sort());
// console.log(x.sort((a,b) => b-a)); //decreasing order
// console.log(x.sort((a,b)=> a-b)); //increasing order

//How to reverse an array?
// console.log(arr.reverse());


//FLAT AN ARRAY
const y = [1, 2, [4, 5, [6, 7]], 8, 9];
const flattedArray= y.flat(2); //2x
// console.log(flattedArray);

//filter() vs find()
// console.log(x.filter((num)=> num >2)); //return the whole array
// console.log(x.find((num)=> num>0)); //takes first only

/*
PRACTICE QUESTIONS
Two Sum
Majority Element
Remove Duplicates from sorted array
Squares of a Sorted Array
Find Pivot Index
Move Zeroes
Remove Element
Max Consecutive Ones
*/

// 1 TWO SUM
function twoSum (nums, target) {
    for(let i=1;i<nums.length;i++) {
        if(nums[i-1] + nums[i] === target) {
            return [i-1, i];
        }
    } return [-1,-1];
}

// let nums = [2,7,11,15];
// console.log(twoSum(nums,26))

//169. Majority Element
function majorityEl (nums) {
    let count=1;
    let res=0;
    for(let i=1;i<nums.length;i++) {
        if(arr[i] === arr[res]) {
            count++;
        } else {
            count--;
        } if(count === 0) {
            res=i;
            count=1;
        }
    } return nums[res];
}

// let nums = [2,2,1,1,1,2,2];
// console.log(majorityEl(nums));

//26. Remove Duplicates from Sorted Array
    function removeDup (nums) {
        let set= new Set(nums);
        nums.length=0;
        nums.push(...set.values());
        // console.log(nums);
        return set.size;
    }

    function removeDuplicates (nums) {
        let res=1; //index values starts from 0 that'why have to take it 1
        for(let i=1;i<nums.length;i++) {
            if(nums[i] != nums[i-1]) {
                nums[res]= nums[i-1];
                res++;
            }
        } return res;
    }
    // let nums = [0,0,1,1,1,2,2,3,3,4];
    // console.log(removeDuplicates(nums));
    // console.log(removeDup(nums));

//977. Squares of a Sorted Array
function squares(nums) {
    for(let i=0;i<nums.length;i++) {
        nums[i]=nums[i]*nums[i];
    }
    return nums.sort((a,b)=> a-b);
}
// let nums = [-4,-1,0,3,10];
// console.log(squares(nums));

//724. Find Pivot Index


//283. Move Zeroes
function moveZeroes(nums) {
    let index=0;
    let temp;
    for(let i=0;i<nums.length;i++) {
        if(arr[i]!=0) {
            temp=arr[i];
            arr[i]=arr[index];
            arr[index]=temp;
            index++;
        } 
    } 
}
// let nums = [0,1,0,3,12];
// console.log(moveZeroes(nums));

//485. Max Consecutive Ones
function maxOnes(nums) {
    let count=0;
    let max=0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]===1) {
            count++;
            max=Math.max(count, max);
        } else{
            count=0;
        }
    } return max;
}

// let nums = [1,0,1,1,0,1]
// console.log(maxOnes(nums));

//27. Remove Element
function removeEl(nums,val) {
    let index=0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    } return index;
}   
// let nums = [0,1,2,2,3,0,4,2];
// console.log(removeEl(nums, 2));


//724. Find Pivot Index
function findPivot(nums) {
    let visitedSum=0;
    let sum =nums.reduce((acc, curr) => acc+curr);
    for(let i=0;i<nums.length;i++) {
        if(sum - nums[i]- visitedSum === visitedSum) {
            return i;
        } visitedSum+=nums[i];
    } return -1;
}
let nums = [1,7,3,6,5,6];
console.log(findPivot(nums));