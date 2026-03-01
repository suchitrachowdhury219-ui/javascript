// var c=300;
let a=200;
if(true){
let a=10;
const b=20;
var c=30;
// console.log("inner : ",a);       //innner: 10
}

// console.log(a);     //200
// console.log(b);
// console.log(c);     //30


//netsed scope

function one(){
    const username="suchitra"

    function two(){
        const website="youtube"
        // console.log(username); 
    }
    // console.log(website);            //website is not defined
    // two()            //suchitra
}
// one() //will not execute

if(true){
const username="hitesh";
if(username=="hitesh"){
    const website=" youtube";
    // console.log(username+website);      //hitesh youtube
    
}
// console.log(website);       //e

}
// console.log(username);      //e


//********intersting*********        (2 ways of declaring  a function )
console.log(addone(5));
 function addone(num){           //we can call/access function before declaring
return num + 1;
}

const addtwo=function(num){        //we can't call fun before declaring as it is stored in a variable
    return num+2;
}
addtwo(5);
