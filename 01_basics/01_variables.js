const accountId = 144553;
let accountEmail = "nybzmr02@gmail.com";
var accountPassword = "12345";
accountCity = "Lucknow"; // can be declared this way but it is not at all recommended
let accountState ;
// accountId = 2; //not allowed

accountEmail = "qazizameer01@gmail.com"
accountPassword = "09876";
accountCity = "Jaipur";
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



/* prefer not to use var declaration 
because of issue in block scope and functional scope
*/