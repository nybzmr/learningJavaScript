// filter
const myNums = [1,2,3,4,5,6,7,8,9,10];
// let newNums = myNums.filter((num)=> num>4)//implicit return
// console.log(newNums);

// const newNums = [];
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums)




//Maps

// const newNums = myNums.map((num)=>num+10)
// console.log(newNums)



//chaining
const newNums = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=> num>= 40)
console.log(newNums);



