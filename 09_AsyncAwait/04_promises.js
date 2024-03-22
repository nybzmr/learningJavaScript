// const promiseOne = new Promise((resolve, reject)=>{
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(()=>{
//         console.log('Async task is completed');
//         resolve();
//     }, 1000)
// })

// promiseOne.then(()=>{
//     console.log('Promise consumed')
// })




// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Second async task is completed')
//         resolve()
//     }, 1000)
    
// }).then(()=>{
//     console.log('Promise consumed')
// })



// // data consumption
// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('Third async task completed');
//         resolve({
//             username : "nybzmr",
//             email: 'nybzmr02@gmail.com',
//         })
//     }, 1000);
// })
// promiseThree.then((data)=>{
//     console.log(data)
// })






// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({
//                 username : "nybzmr",
//                 email: 'nybzmr02@gmail.com',
//             })
//         } else {
//             reject('error: Something went wrong')
//         }
//     }, 1000);
// })
// const username = promiseFour.then((data)=>{
//     console.log(data);
//     return data.username;
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//      console.log(error)
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected.")
// })






// //Async await syntax
// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({
//                 username : "nybzmr",
//                 email: 'nybzmr02@gmail.com',
//             })
//         } else {
//             reject('ERROR:JS went wrong')
//         }
//     }, 1000);
// })
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch (error) {
//         console.log(error)
//     }
// }    
// consumePromiseFive();






// //fetch using try catch 
// const getAllUsers = async ()=>{
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})