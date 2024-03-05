// let score = "33abc";
// console.log(typeof score);
// console.log(typeof(score));


// let valueInNumber = Number(score);
// console.log(typeof score);
// console.log(valueInNumber);   // will give NaN since 33abc can not be converted into an actual number

// console.log(typeof valueInNumber);// will give nuumber since the datatype has been converted


// let score = null;
// console.log(typeof score);
// console.log(typeof(score));


// let valueInNumber = Number(score);
// console.log(typeof score);
// console.log(valueInNumber);   // will give 0

// console.log(typeof valueInNumber);// will give nuumber since the datatype has been converted


// let score = undefined;
// console.log(typeof score);
// console.log(typeof(score));


// let valueInNumber = Number(score);
// console.log(typeof score);
// console.log(valueInNumber);   // will give NaN since undefined can not be converted into an actual number

// console.log(typeof valueInNumber);// will give nuumber since the datatype has been converted


// let score = true;
// console.log(typeof score);
// console.log(typeof(score));


// let valueInNumber = Number(score);
// console.log(typeof score);
// console.log(valueInNumber);   // will give 1 for true and 0 for false

// console.log(typeof valueInNumber);// will give nuumber since the datatype has been converted




/*
"33"->33
"33abc"-> NaN
undefined -> NaN
true -> 1 false-> 0
*/






// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

/*
boolean conversion 
1-> true
0-> false
""-> false //empty string 
"nayaab" -> true   //non empty string
*/






//string conversion

// let anyNumber = 33;

// let stringNumber = String(anyNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);




// ******************* OPERATIONS******************
let value = 3 
let negValue = -value;
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)// 2 raise to the power 2
console.log(2/2)
console.log(2%2)// modulus operato


let str1 = 'hello'
let str2 = 'Nayaab'
let sumStr = str1+ str2;
console.log(sumStr); // will print hello Nayaab




// number and string addition
console.log("2"+2); // output 22
console.log(2+"2"); // output 22
console.log('2'+'2'); // output 22

//special case
// first convert to string bcz first there is "2"
console.log("2"+2+1);  // output 221
// first add numbers thn add to strings
console.log(1+2 +"2")// output 32