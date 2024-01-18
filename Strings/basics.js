let link="https://github.com/FrontendFreaks/DSA-in-JavaScript/tree/main/String";

let str="shubham";
let lname="dogra";
console.log(str.charAt(2));
console.log(str.charCodeAt(3)); //ASCII value
console.log(str[5]);


//The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still returned. 
// The slice() method returns an empty string if this is the case
console.log(str.slice(2,5)); //last not included
console.log(str.substring(5,2)); //swaps value

console.log(str.indexOf("h"));
console.log(str.lastIndexOf("h"));
console.log(str.includes("x"));

let str1="niharika";
let str2="walter white";
console.log(str.localeCompare(str1)); //if equal 0, otherwise -1
console.log(str1.localeCompare(str2));

const info="My name is Shubham and I am Shubham";
// console.log(info.replace("shubham", "deepak"));
// console.log(info.replaceAll("shubham","deepak"));

const splited= str.split("");
console.log(splited.join(""));

console.log(str+str1);
console.log(str.concat(str1));
console.log(`${str}${lname}`);

console.log(info.startsWith("My"));
console.log(info.endsWith("Shubham"));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
let number=123;
console.log(number.toString().concat(str));

const obj= {
    name: "shubham",
    lname: "dogra",
}
console.log(obj);
console.log(JSON.stringify(obj)); //oppposite being JSON.parse(obj);

//JSON data
const json = '{"result":true, "count":42}';
console.log(JSON.parse(json));




// console.log(str);