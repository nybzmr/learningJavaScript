// for 
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// nested loops
// for (let i = 1; i <= 10; i++) {
//     console.log("Table of "+ i)
//     for (let j = 1; j <= 10; j++) {
//         console.log(i*j);
//     }
//     console.log("\n")
    
// }



// break and continue statements

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);   
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        continue;
    }
    console.log(`Value of i is ${index}`);   
}