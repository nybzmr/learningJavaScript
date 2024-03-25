// let myName = `Nayaab     `
// console.log(myName.length)


// let myHeros = ['Thor', 'SpiderMan'];

// let heroPower = {
//     Thor : 'Hammer',
//     SpidermMan: 'Sling',
    
//     getSpiderPower : function(){
//         console.assertlog(`Spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.Nayaab = function(){
//     console.log(`Nayaab is present in all objects`)
// }


// // heroPower.Nayaab();
// // myHeros.Nayaab(); // anything injected to parent is accessible to children 


// Array.prototype.ArrNayaab = function(){
//     console.log(`Hey nayaab`);
// }

// myHeros.ArrNayaab();
// heroPower.ArrNayaab();// gives an error cuz anything injected to children is not accessible to the parent.


// // inheritance 
// const user ={
//     name : "Nayaab",
//     email: "nybzmr02@gmail.com"
// }
// const Teacher = {
//     makeVideo: true,
// }
// const TeachingSupport ={
//     isAvailable: false,
// }

// const TSWork={
//     makeAssignment : 'JS Assignment',
//     fullTime : true,
//     __proto__ : TeachingSupport
// }

// Teacher.__proto__ = user;  // teacher can access the properties of user


// // Modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)







String.prototype.trueLength = function(){
    return this.trim().length;
}

let myName = " Nayaab      ";
let myNameLength = myName.trueLength()
console.log(myNameLength);