// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);



//special cases
console.log("2">1);
console.log("02">1);



console.log(null > 0);// false
console.log(null == 0);//false
console.log(null >= 0);// true

// the reason is that an equality check == and comaprison> < >= <= work differently
// comparison converts null to a number treating it as 0.
// that is why in third line null>=0 is true as 0(converted from null)>= 0



//strict check
// === doesnt converts datatype and checks if datatype is same or not