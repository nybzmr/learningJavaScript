// Immediately Invokrd Function Expressions

//  function connectDatabase(){
//     console.log("DataBase connected");
//  }
//  connectDatabase();


// but at times we want to save the function from getting polluted by the global scope variables

// (function connectDatabase(){
//     console.log("DataBase connected");
//  })();// this semicolon is mandatory sometimes after iife beacusde iife doesnt know where to end the fist code


 // Using arrow func
//  (()=>{
//     console.log("Database disconnected");
//  })();


// Passing arguments
((dbName)=>{
    console.log(dbName+" connected");
 })("Mongo DB");
