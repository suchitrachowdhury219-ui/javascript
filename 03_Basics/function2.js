 function calculateCartPrice(...num1){                //... -> rest operator
    return num1;
 }
 
//  console.log(calculateCartPrice(2));//without ... op:2
//  console.log(calculateCartPrice(200,400,500,6000,790)); //[ 200, 400, 500, 6000, 790 ]

 function calculatePrice2(val1,val2,...num1){
return num1;
 }
//  console.log(calculatePrice2(200,500,67,654,45));   //[ 67, 654, 45 ]

 const user={
   username:"suchitra",
   price:199
 }
 function handleObject(anyobject){
   // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); //username is suchitra and price is 199
 }

 handleObject({
   username:"sam",
   price:299
 }
 );

 const myNewarray=[200,500,678];

 function returnSecondValue(getArray){
return getArray[2]
 } 
//  console.log(returnSecondValue(myNewarray));       //678
//  console.log(returnSecondValue([2,5,6,8,9]));    //6


 