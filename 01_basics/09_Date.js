let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2023, 0, 23); // months are counted from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);// 5 and 3 are hours and minutes
// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamps = Date.now()
// console.log(myTimeStamps);

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getTime());


console.log(myDate.toLocaleString('default', {
    weekday: "long",
}))