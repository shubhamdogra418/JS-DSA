// Question 1: Sum of all natural numbers from 1 to n

function sumOfAllNaturalNumbers (num) {
    let sum=0;
    for(let i=1;i<=num;i++) {
        sum+=i;
    } return sum;
}
// console.log("hello")

// console.log(sumOfAllNaturalNumbers(10));

//Question 2: Sum of digits of a number
function sumOfDigits(num) {
    let sum=0;
    while(num > 0) {
        sum+=num%10;
        num=Math.floor(num/10); 
    } return sum;
} 
// console.log(sumOfDigits(1278));

// Count the number of digits of a number
    function countDigits(num) {
        let count=0;
        num=Math.abs(num);
        while(num >0) {
            num=Math.floor(num/10);
            count++;
        } return count;
    } 
    // console.log(countDigits(-1211413131));

//Question 4: Check if a number is palindrome
    function isPalindrome (num) {
        let copy= num;
        let revNum=0;
        while(copy > 0) {
            let lastDigit= copy%10;
            revNum= revNum*10+lastDigit;
            copy= Math.floor(copy/10);
        } return num===revNum;
    }
    // console.log(isPalindrome(12215));

//Question 5: Find nth Fibonacci number
//iterative
    function fibo (num) {
        if( num< 2) return num;
        let prev=0;
        let curr=1;
        let next;
        for(let i=2;i<=num;i++) {
            next=curr+prev;
            prev=curr;
            curr=next;       
        } return next;
    }
    // console.log(fibo(8));
//recursive
    function fiboRec (n) {
        if( n==0 || n==1) return n;
        return fibo(n-1) + fibo (n-2);
    }
    console.log("fibo n is", fiboRec(10));

//Question 6: Missing Number in an Array
    function findMissing(arr) {
        let sum=0;
        for(let i=0;i<arr.length;i++) {
            sum+=arr[i];
        } return arr.length * (arr.length+1)/2 -sum;

        // return arr.length * (arr.length+1)/2 -arr.reduce((curr, acc) => acc+curr);
    }
    let arr=[9,6,4,2,3,5,7,0,1];
    // console.log(findMissing(arr));

//1523. Count Odd Numbers in an Interval Range
 function findOdd(low, high) {
    let count=0;
    for(i=low ;i<=high;i++) {
        if(i%2 !=0) {
            count++;
        }
    } return count;
 }
//  console.log(findOdd(3,7));

 //231. Power of Two
 function isPowerOfTwo (n) {
    if(n==0) return false;
    if(n==1) return true;
    while( n!=1) {
        if(n%2 !=0) {
            return false;
        } n=n/2;
    } return true;
}
// console.log(isPowerOfTwo(16));

//69. Sqrt(x)
    function mySqrt (n) {
        let low=1;
        let high=n;
        let res=null;
        while(low<=high) {
            // let mid= Math.floor( low+ (high-low)/2);
            let mid=parseInt((low +high)/2);
            if(mid*mid == n) {
                return mid;
            } else if (mid*mid > n) {
                high=mid-1;
            } else {
                res=mid;
                low=mid+1;
                
            }
        } return res;
    }

    // console.log(mySqrt(60));

//412. Fizz Buzz
function fizzBuzz(n) {
    let arr=[];
    for(let i=1;i<=n;i++) {
        if( i%3==0 && i%5==0) {
            arr.push("FizzBuzz");
        } else if ( i%5==0) {
            arr.push("Buzz");
        } else if(i%3==0) {
            arr.push("Fizz");
        } else {
            arr.push(String(i));
        }
    } return arr;
}

// console.log(fizzBuzz(15));