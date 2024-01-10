//arrow fxn
const fibo =(n)=> {
    // const arr=[0,1]
    // for (let i = 2; i < n; i++) {
    //     arr.push(arr[i-1]+ arr[i-2]);
    // }
    // // console.log(arr);
    // console.log(arr[n]);

//using recursion here
    if(n===0 || n===1) return n;
    return fibo(n-1) + fibo(n-2);
}

console.log(fibo(7));