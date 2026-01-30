let score="55abc";
console.log(typeof score);          //string
let valueInNumber=Number(score);    
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);         //NaN (not a number)
//same goes with undefined,string



let value=null;
console.log(typeof value);          //object
let valueinNumber=Number(null);    
console.log(typeof valueinNumber);  //number
console.log(valueinNumber);         //0


let salary=true;
console.log(typeof salary);         //boolean
let salaryinNum=Number(salary); 
console.log(typeof salaryinNum);    //number
console.log(salaryinNum);           //1

//"33"=>33
//"33abc" =>NaN
//true =>1 ; false =>0

let isLoggedIn=1;
console.log(typeof isLoggedIn);
let booleanisLoggedIn=Boolean(isLoggedIn);
console.log(typeof booleanisLoggedIn);
console.log(booleanisLoggedIn);
//1=>true ; 0=>false
//""=>false ;"hitesh"=>true



let someNumber=33;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);





