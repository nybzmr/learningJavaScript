// two ways of declaration 
//1. Constructor: Object formed is singleton
// Object.create

//2. Literals: object formed is not singleton

const mySym = Symbol("key1")
const jsUser ={
    "full name": "Nayaab Zameer",
    age: 18,
    [mySym]: "myKey1",
    location: "Lucknow",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"],

}
//accessign objects
// console.log(jsUser.full name); //invalid for space separated strings and symbols

console.log(jsUser["full name"])
console.log(jsUser[mySym]);


//changing values
jsUser.age = 19;


//Freezing changes
Object.freeze(jsUser);
jsUser.age = 20
console.log(jsuser.age) // will print 19 cuz the changes made after freezing objects arent propagated
