class User {
    encryptPassword(){
        return`${this.password}abc`
    }
    constructor (username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
 
    }
}

const nyb = new User(`nyb`, `nybzmr02@gmail.com`, `123`)

console.log(nyb.encryptPassword())