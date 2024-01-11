/*
https://github.com/FrontendFreaks/DSA-in-JavaScript/tree/main/Stack
Remove All Adjacent Duplicate in String
Valid Parentheses
Backspace String Compare
Next Greater Element 1
Online Stock Span
Next Greater Element 2
Remove K Digits
Sum of Subarray Minimums
*/

//20. Valid Parentheses
function validP(s) {
        let stack=[];
        for(let c of s) {
            if( c === '(' || c=== '{' || c==='[') {
                stack.push(c);
            } else {
                if(!stack.length || 
                    (c === ')' && stack[stack.length-1] !== '(') ||
                    (c === '}' && stack[stack.length-1] !== '{') ||
                    (c === ']' && stack[stack.length-1] !== '[')) {
                        return false;
                    } 
                    stack.pop();
            }
        } return !stack.length;
    };

// let s = "()[]{}";
// console.log(validP(s));

//1047. Remove All Adjacent Duplicates In String
function adjacentDup(s) {
    let stack=[];
    for( let c of s) {
        if( stack[stack.length-1] === c ? stack.pop() : stack.push(c));
    } return stack.join(',');
}
// let s = "azxxzy";
// console.log(adjacentDup(s));

//844. Backspace String Compare
function backSpace(s,t) {
    function helper(str) {
        let stack=[];
        for(let char of str) {
            if( char === '#') {
                if(stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(char);
            }
        } return stack.join('');
    } 
        const doS= helper(s);
        const doT= helper(t);
        return doS === doT;

}
// let s = "ab##", t = "c#d#";
// console.log(backSpace(s,t));

//496. Next Greater Element I
// function nextGreater1 () {
//     for(let i=0;i<nums1.length;i++) {
//         for(let j=nums2.length-1; j>=i)
//     }
// }
// let nums1 = [4,1,2], nums2 = [1,3,4,2];
// console.log(nextGreater1(nums1, nums2));

//503. Next Greater Element II

function nextGreater2(arr) {
    let stack=[];
    let newArr= new Array(arr.length).fill(-1);
    for(let j=0;j<2;j++) {
    for(let i=0;i<arr.length;i++) {
        while (stack && arr[stack.at(-1)] < arr[i]) {
            let stackTop= stack.pop();
            newArr[stackTop]=i;
        } stack.push(i);
    }
} 
    return newArr;

}   
// let arr = [1,2,3,4,3];
// console.log(nextGreater2(arr));

//402. Remove K Digits
function removeK(num,k) {
    let stack=[];
    for ( let curr of num) {
        while( k && stack.length && stack[stack.length-1] > curr) {
            stack.pop();
            k--;
        } 
        if (curr !== '0') stack.push(curr);
    } 
    while(stack.length && k--) stack.pop();
     return stack.length ? stack.join("") : '0';

     
}

let num = "1432219";
console.log(removeK(num, 3));