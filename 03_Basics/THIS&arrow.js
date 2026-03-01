const user={
    username:"hitesh",
    price:299,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);        //this=>current context
        
    }
}