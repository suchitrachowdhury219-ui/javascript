//Promise is a object that represents the eventual completion(or failure) of an asymchronous operation and its resulting value
    //3 state pending, fulfil, rejected
    //
   const promise1=new Promise(function (resove,reject){
    //do an async task
    //DB calls, cryptography,Network call
    setTimeout(function(){
        console.log('Async task is completed');
        //method to connect resolve with .then() and reject with .catch()
        resolve();
        
    },1000)
   });
   //promise will be consumed, and how consumtion will be done we will see here
   //resolve is connevten with .then()
   promise1.then(function(){
    console.log("Promise consumed");
    
   });

   new Promise(function(resolve,reject){
    
   })

   
   