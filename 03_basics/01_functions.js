// console.log("N");
// console.log("a");
// console.log("y");
// console.log("a");
// console.log("a");
// console.log("b");


// function sayMyName() {
//     console.log("N");
//     console.log("a");
//     console.log("y");
//     console.log("a");
//     console.log("a");
//     console.log("b");    
// }

// sayMyName();



// // Function to add two numbers
// function addTwoNumbers(num1, num2){ //num1 and num2 are parameters
//     console.log(num1+num2);
// }

// addTwoNumbers(3,5);//3 and 5 are arguments
// function cout(parameter){
//     console.log(parameter);
// }
// function addTwonumbers(num1,num2){
//     // let sum = num1+ num2;
//     // return sum;

//     return num1+num2;
// }
// const result = addTwonumbers(5,8)
// cout(result);




// default parameter
// function lgoinUserMessage(username = "sam"){
//     console.log(`${username} just logged in`);
//     return;
// }
// lgoinUserMessage("Nayaab");// prints Nayaab just logged in
// lgoinUserMessage();// prints Sam just logged in





// function calculateCartValue(...itemValue){
//     let cartValue = 0;
//     for(let i=0; i<itemValue.length; i++){
//         cartValue = cartValue + itemValue[i];
//     }
//     return cartValue;
// }

// let cartValue = calculateCartValue(100,300,500,200,100,200);
// console.log(cartValue);





//Handeling objects
const user = {
    username: "Nayaab",
    password: 12345
}

function handleObject(anyObject){
    console.log(`Your username is ${anyObject.username} and your password is ${anyObject.password}`);
}

handleObject(user);




// different syntax for declaration 
const addTwo = function(num1, num2){
    return num1+num2;
}
