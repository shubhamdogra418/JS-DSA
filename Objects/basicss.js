const person ={
    name: "shubham",
    age :25,
    isMarried: false, 
    fruits :["apple", "papaya", "banana",],
    greet: function () {
        console.log("good morning");
    },
    walk : () => {
        return "until the end";
    },
    mountains : { peace : "god"},
}
console.log(person["name"]);
console.log(person.age);
person.greet();
console.log(person.fruits);
console.log(person.walk());
console.log(person.mountains.peace);

//returning boolean value
console.log(person.hasOwnProperty("lastname"));

//Adding, deleting, and updating keys
delete person.fruits; //delete
person.age=26; //update
person.location= "himachal pradesh"; //adding

//Using freeze and seal methods
// Object.freeze(person); //can't add/delete/update
// person.age=27;

// Object.seal(person); //can't add/delete but can update
// person.age=25;


// Keys, Values & Entries
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


//for in loop
// for(let key in person) {
//     console.log(key , "=>", person[key]);
// }

//Looping through an Object using forEach with Object.keys
Object.keys(person).forEach((key)=> console.log(key));
Object.values(person).forEach((value)=> console.log(value));

//How to check if two objects are equal?
const person3= {
    name: "niharika",
    lastname: "sankhyan"
};
console.log(Object.is(person,person3)); //false
// console.log(person);

//Prototype and Inheritance in JavaScript Objects
const obj ={
    name: 'shubham',
    place: "himachal pradesh",
    age: 25
}
const obj2 ={
    name: "niharika",
    __proto__: obj, //inherited all tha data of obj
}
console.log(obj2.place,obj.age);

