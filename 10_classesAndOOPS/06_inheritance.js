class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const nyb = new Teacher(`nayaab`, `nybzmr02@gmail.com`, 123 );
nyb.addCourse();

