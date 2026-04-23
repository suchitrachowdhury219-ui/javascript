//ES6

class User{
    constructor (username,email,password){ //constrctor is automatically called when we create an object using the class. it is used to initialize the properties of the object.
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPasword(){
        return `${this.password}abc`
    }

    changeUesrname(){
    return `${this.username.toUpperCase()}`
    }
}
const chai=new User("chai","chai@gmail.com","123");
console.log(chai.encryptPasword());
console.log(chai.changeUesrname());
