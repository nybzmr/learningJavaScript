function setUsername(username) {
    this.username = username;
    console.log("Called")
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const nyb = new createUser("nyb", "nybzmr02@gmail.com", "123")
console.log(nyb)