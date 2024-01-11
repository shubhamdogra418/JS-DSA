let arr=[1, 4, 6, 9, 12, 15];

function linearS(arr,target) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]=== target) return i;
    } return -1;
}

console.log(linearS(arr, 12));
console.log(arr.indexOf(15));
console.log(arr.includes(12));
console.log(arr.find((num) => num>14)); //value
console.log(arr.findIndex((num) => num>10)); //index