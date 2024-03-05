// stack (primitive) | heap (non-primitive)


//Primitive
// let myName = "Nayaab Zameer";
// console.log(myName);
// let anotherName = myName;
// console.log(anotherName);
// anotherName = "Ayaan";
// console.log(myName);
// console.log(anotherName);


//Non-primitive
let user01 ={
    email: "user@google.com",
    password: 12345,
}

let user02 = user01
console.log(user01); 
console.log(user02);

user02.email = "nybzmr02@gmail.com"
console.log(user01);// email here will be updated one only
console.log(user02);