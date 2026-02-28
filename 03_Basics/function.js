function sayMyName(){
console.log("m");
console.log("u");
console.log("m");
console.log("u");
}
// sayMyName()        //m u m u
1.
 /*function add2no(number1,number2){               //values in fnction definitions are *parameters
     console.log(number1+number2);
 }*/

// add2no(5,6);        //11            //values in fnction calling is *arguements
// add2no(5,"6");      //56
// add2no(5,"d");      //5d
// add2no(5,null);     //5
  
/*const result1=add2no(5,6);
 console.log("Result :",result);   */   //Result : undefined

2.
function addTwono(number1,number2){                         
//     let result =number1+number2;
//    return result;                            // after return function will stop it's work. no code will be executed after that
 
return number1+number2;
}
const result2=addTwono(15,6);
// console.log("Result :",result2);        //21

function loginUserMessage(username){        // if u want a default value put username="sam"
    if(username===undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("suchitra"));      //suchitra just logged in

console.log(loginUserMessage());                //undefined just logged in , u can use if loop to prevent this situation

