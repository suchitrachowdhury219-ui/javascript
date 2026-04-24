class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,pasword){

        super(username);    //super keyword is used to call the constructor of the parent class
        this.email=email;
        this.password=this.password;
    }
    addCourse(){
        console.log(`A New course was added by ${this.username}`);
    }
}

const chai=new Teacher("chai","chai@teacher.com","123");
chai.addCourse();       //A New course was added by chai
chai.logMe();           //USERNAME chai

const masalaChai=new User("masala chai")
masalaChai.logMe()          //USERNAME masala chai

console.log(chai instanceof Teacher);   //true
console.log(chai instanceof User);   //true☻



