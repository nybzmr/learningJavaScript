const user = {
    username: "nybzmr",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


const User = (username, loginCount, isLoggedIn)=>{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("nayaab", 12, true)
const userTwo = new User("zameer", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);