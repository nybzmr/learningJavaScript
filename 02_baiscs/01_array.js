// //Array
const myArr = [1, 2, 3, 4, 5, 6];
// const myHeros = ["IronMan", "Thor", "SpiderMan", "Dr. Strange"]

// const diffDeclaration = new Array(1,2,3,4,5);
// console.log(myArr[0]);

// // Array methods
// myArr.push(7);
// myArr.push(8);
// myArr.pop();

// myArr.unshift(0);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArray = myArr.join(); //Converts to string
// console.log(typeof newArray);



//Concept of splice and slice
// Slice doesnt includes the last  element of the range and keeps the original array unaffected.
// Splice includes the last element of the range and changes the original array.

const slicedArray = myArr.slice(1,3)
console.log("Sliced array"+slicedArray);// prints 2,3
console.log(myArr); // prints 1, 2 , 3, 4, 5, 6

const splicedArray = myArr.splice(1,3)
console.log("Spliced array"+splicedArray);// prints 2, 3, 4
console.log(myArr); // prints 1, 5, 6
