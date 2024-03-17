// for of
//[{},{},{},{}]

// const arr = [1,2,3,4,5];
// for (const value of arr) {
//     console.log(value)
// }
// const greeting = "Hello World!";
// for (const character of greeting) {
//     console.log(character)
// }


// Maps
// const map = new Map();
// map.set('IN' , 'INDIA')
// map.set('USA' , 'United States of America')
// map.set('Fr' , 'France')
// map.set('IN' , 'INDIA')

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key+ ':-'+ value )
// }
//  //maps are iterable this way

//iterating objects
// const obj = {
//     username: "nybzmr",
//     password: 12345
// }

// for (const [key, value] of obj) {
//     console.log(key+ value);
// } 
// objects are not iterable this way

const obj = {
    username: "nybzmr",
    password: 12345
}
// for in loop can access objects 


for (const key in obj) {
    console.log(`${key} :- ${obj[key]}`);
}

// for in loop for arrays

let myArr = ['Nayaab', 'Zameer', 'Qazi' ]
for (const key in myArr) {
    console.log(key)
}
// this will print just indices (keys of arrays)

// we can print values as follows

for (const key in myArr) {
    console.log(myArr[key])
}