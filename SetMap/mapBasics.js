//Map in JavaScript
//have key:value pairs

const myMap=  new Map([["name", "shubham"], ["place", "himachal pradesh"], ["age", 25]]);
console.log(myMap);
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());
console.log(myMap.has("age"));
console.log(myMap.delete("age"));
console.log(myMap.has("age"))
console.log(myMap.get("name"));
console.log(myMap.set("lname", "dogra"));
console.log(myMap.size);

// for(const [key, value] of myMap) {
//     console.log(key,value);
// }

// myMap.forEach(element => { //only values
//     console.log(element);
// });

// for(const value of myMap) {
//     console.log(value)
// }

//Weak Map in JavaScript
//only holds the functions and objects and nothing else
//weak reference holds the reference and not the key itself
//automatically garbage collected

let obj= {name :"shubham"}
const myWeakMap= new WeakMap();
myWeakMap.set(obj, "metadata");
obj={}; //null; garbage collected means hold ref and not value
console.log(myWeakMap.has(obj));