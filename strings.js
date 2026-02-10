const name="suchitra";
const repoCount=50;

// console.log(name+repoCount+"value");  //outdated

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);     //very important


//here comes string interpolation, here u makes placeholders (any variable u can inject here)

const gameName=new String('suchitra-sc');  //new->keyword
 //here string is a object not an array ,stored in key-value pair   //{}-> constructor

 console.log(gameName[2]);   //s (to access key-value pair)
 console.log(gameName.__proto__);   //{} to access object

 console.log(gameName.length);              //8
 console.log(gameName.toUpperCase());       //SUCHITRA
 console.log(gameName.charAt(4));           //i
 console.log(gameName.indexOf('r'));        //6

const newString=gameName.substring(0,4);        //such //here u can't use -ve index like in slice
 console.log(newString);

 const anotherString=gameName.slice(-8,-3);      //hitra
 console.log(anotherString);

 const newString1="   hitesh    ";
 //use trim to remove whitespace from both sides
 console.log(newString1);
 console.log(newString1.trim());  


 const url="https://suchitra.com/suchitra%17chowdhury";
 console.log(url.replace('%17','-'));

console.log(url.includes('cat'));         //false
console.log(url.includes('such'));        //true

console.log(gameName.split('-'));


 

 
