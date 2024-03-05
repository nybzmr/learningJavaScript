// const firstName = "Nayaab";
// const lastName = "Zameer";
// //old way
// // console.log(firstName+lastName);

// // modern way

// console.log(`My name is ${firstName} ${lastName}`)


// different methods for string

// const gameName = new String("Rage-Brutal");// another way to declare a string
// console.log(gameName[0])//accessing the chara ter at 0 place

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'))

// console.log(gameName.toUpperCase());

// const newString = gameName.substring(0,4)
// console.log(newString)
// const anortherString = gameName.slice(-11,-4)
// console.log(anortherString)


// const newString = "     Nayaab     " 
// console.log(newString);
// console.log(newString.trim()+"Zameer");
// console.log(newString.trimStart()+"Zameer");
// console.log(newString.trimEnd()+ "Zameer");


// const url = "https://hitesh.com/hitesh%20choudhary";
// console.log(url.replace('%20', '-'));
// console.log(url.includes('hitesh'));


const splitTest = "This is a string that has to be broken into an array."
console.log(splitTest.split(' ', 5))
let arr = splitTest.split(' ', 5);
console.log(arr[1])