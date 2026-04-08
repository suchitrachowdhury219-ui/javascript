const userEmail=[];

// if (userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("don't have useremail");
    
// }
//falsy  values
//false, 0, -0, BigInt 0n,"", null , undefined, NaN

//truthy values
//"0",'false', " ", [], {}, function(){}

/*if(userEmail.length===0){
console.log("array is empty");
}*/

const emptyObj={
    username:"suchii"
}
if (Object.keys(emptyObj).length===0)   {
    console.log("object is empty"); 
}
else{
    console.log("object is not empty");
    
}
//false==0    =>true
//false==""   =>true
//0=""        =>true

//nullish coalescing operator (??):null undefined


let val1;
// val1=5 ?? 10                     5
// val1=null ?? 10                  10
//val1=undefined ?? 15              15
//val1=null ?? 10 ?? 15             10
//console.log(val1);

//ternary opearotr
//condition ?   true : false;

// const iceTeaPrice=100;
// iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")



