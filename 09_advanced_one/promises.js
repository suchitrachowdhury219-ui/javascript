//Promise is a object that represents the eventual completion(or failure) of an asymchronous operation and its resulting value
    //3 state pending, fulfil, rejected
    //
   const promise1=new Promise(function (resolve,reject){
    //do an async task
    //DB calls, cryptography,Network call
    setTimeout(function(){
        //console.log('Async task is completed');
        //method to connect resolve with .then() 
        resolve();
        
    },1000)
   });
   //promise will be consumed, and how consumtion will be done we will see here
   //resolve is connevten with .then()
   promise1.then(function(){
    //console.log("Promise consumed");
   });

   //.then() to take values
   //.catch() to show error

//2nd way
//    new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)        
//     }).then(function(){
//         console.log("Async 2 resolved"); 
//     })

//3rd way
    const promise3=new Promise(function(resolve,reject){
        setTimeout(function(){
resolve({username:"suchitra",email:"suchitr34@gmail.com"})
        },1000)
    })
    promise3.then(function(user){
   // console.log(user);      //{ username: 'suchitra', email: 'suchitr34@gmail.com' }
    })



   const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
            if(!error){
                resolve({username:"suchita", password:"1245"})
            }
            else{
                reject('ERROR : something went wrong')
            }
    },1000)
   })
   promise4.then((user)=>{
    console.log(user);
    return user.username;
   }).then((usernam)=>{
console.log(usernam);

   }).catch(function(error){
    console.log("error");
    
   })
  
   
   

   