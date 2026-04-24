class User {
    constructor (username){
        this.username=username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        }


       static  createId(){      //static is used to create a method that belongs to the class and not to the object of the class
            return `123`;
        }
}
const hitesh=new User("hitesh")
// console.log(hitesh.createId());

class Teacher  extends User{
    constructor (username,email){
    super (username);
    this.email=email;
    }
}

const iphone=new Teacher ("iphone","i@phonegmail.com");
iphone.logMe();                 //Username: iphone
console.log(iphone);            //Teacher { username: 'iphone', email: 'i@phonegmail.com' }
console.log(iphone.createId);       //undefined as method is static

