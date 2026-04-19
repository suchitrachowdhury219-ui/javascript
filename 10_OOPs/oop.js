const user={
    username:"suchitra",
    loginCoumt:8,
    signedIn:true,

    getUserDetails:function (){
    //console.log("Got user details from database"); 
    // console.log(`username: ${this.username}`);
    console.log(this);          //thos -> current context
    
    
}

}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);          //{} as in global context

//const promise1=new Promise()        //new -> constructor function
//const data=new Date()               

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
        
    }
//return this;

}
const user1= new User("hitesh",12,true);
const user2= new User("Suchitra",10,false);     //if we don't use new keyword then the values will be overwritten

console.log(user1);     //User { username: 'hitesh', loginCount: 12, isLoggedIn: true }
console.log(user2);     //User { username: 'Suchitra', loginCount: 10, isLoggedIn: false }

//instanceof


