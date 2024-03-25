class user {
    constructor (username){
        this.username = username;
    }
    logMe(){
        console.log(`username : ${this.username}`)
    }
    static createId(){ // would restrict the use of this function in children
        return `123`
    }
}

const nayaab = new user("Nayaab")
console.log(nayaab.createId())