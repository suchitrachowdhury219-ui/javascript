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
        let error=true;
            if(!error){
                resolve({username:"suchita", password:"1245"})
            }
            else{
                reject('ERROR : something went wrong')
            }
    },1000)
   })
   promise4
   .then((user)=>{
    console.log(user);
    return user.username;
   })
   .then((usernam)=>{
console.log(usernam);
   })
   .catch(function(error){
   
    console.log(error);
   }).finally(()=>{
    console.log("The Promise is either resolved or rejected");//whether resolved or rejected this will be executed 
   })
  //finally is used to execute code after the promise is settled, regardless of whether it was resolved or rejected. It is often used for cleanup tasks or to perform actions that should happen after the promise has completed, regardless of the outcome.
   

  promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"suchitra", password:"1245"})
  }
else{
    reject('ERROR: JS went wrong')
}
    },1000)
})
async function consumepromise5(){   //async function is a function that returns a promise and allows you to use the await keyword inside it to wait for the resolution of promises. but we have to use try catch block to handle error in async await
    try{
    const response= await promise5
    console.log(response);
    }catch(error){
        console.log(error);
        
    }}
consumepromise5();
// async function getAllUser(){
//    try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//    const data=await response.json()
//    console.log(data);
//    } catch(error){
//     console.log("E: ",error);
    
//    }
   
// }   
// getAllUser();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data6=>{
    console.log(data);
    
}))
.catch((error6=>{
    console.log(error);
    
}))