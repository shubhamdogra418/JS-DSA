let arr=[1,2,3,4,5,6];
let mySet= new Set();
// no key:value pairs but only unique values
mySet.add(1,10);
mySet.add(10); //same so avoid
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(40); //already exists so avoid
mySet.delete(10);
console.log(mySet.has(10));
console.log(mySet.size)
console.log("keys are", mySet.keys())
console.log("values are", mySet.values());
console.log("entries are", mySet.entries());
//for each loop
mySet.forEach(element => {
    console.log(element)
});
//for of loop
for (const value of mySet) {
    console.log(value);
}

// mySet.clear();

mySet=[...arr];
console.log(mySet);



