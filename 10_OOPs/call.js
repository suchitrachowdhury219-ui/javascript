function SetUsername(username){
    //complex DB calls
    this.username=username;
    console.log("called");
    
}

function createUser(username,email,password){

    //SetUsername(username)  this will not work as it will not set the username property on the current object (the one being created by createUser) and it will not have access to the this keyword of the createUser function.
    
SetUsername.call(this,username)      //in this way we can call the SetUsername function and pass the currentcontext (this) and the username argument. This allows us to set the username property on the current object (the one being created by createUser) using the logic defined in SetUsername.

    this.email=email;
    this.password=password;
}

const chai=new createUser("chai","chai@fb.com","123")
console.log(chai);
