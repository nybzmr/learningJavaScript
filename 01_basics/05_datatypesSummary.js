// Primitive data types
// 7 Types: String, Number, Boolean, null, undefined, symbol, BigInt

// BigInt can be declared by writing a lower case n after the number
const bigNumber = 1n;
console.log(typeof(bigNumber));// prints bigint at the console

// Non Primitive or Reference types
// 3 Types: Arrays, Objects, Functions

const heros =["IronMan", "Thor", "Hulk"];
let myobj= {
    name : "Nayaab",
    age: 22,
}
let  myFunc =function(){
    console.log("Hello World")
}