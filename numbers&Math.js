const score=200;
console.log(score);  //400

const balance=new Number(230);      //if u want specifically the numbertype
console.log(balance);           //[Number: 230]

console.log(balance.toString());  //230  //make the balance of string datatype and u can perform string operations too
console.log(balance.toString().length); //3
console.log(balance.toFixed(2));        //230.00


const otherNumber=323.6758;

console.log(otherNumber.toPrecision(3)); //324   //precision means u want precised value 
console.log(otherNumber.toPrecision(5)); //323.68

const hundreds=1000000;
console.log(hundreds.toLocaleString(en-IN));  //10,00,000

//*****************MATHS*****************

console.log(Math);
console.log(Math.abs(-5));      //5
console.log(Math.round(8.5));   //9
console.log(Math.ceil(6.7));    //7
console.log(Math.floor(6.7));   //6
console.log(Math.min(7,8,4,2));     //2
console.log(Math.max(7,8,4,2));     //8

console.log(Math.random());  //0.7738654 (always give value between 0 and 1)
console.log(Math.random()*10+1);

const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1))+min);








