//Dates

//here we create an object & it's instance
// let myDate=new Date();
// console.log(myDate.toString());  //Mon Feb 02 2026 17:25:46 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Mon Feb 02 2026
// console.log(myDate.toISOString());  //2026-02-02T11:55:46.091Z
// console.log(myDate.toLocaleString());   //2/2/2026, 5:25:46 pm
// console.log(myDate.toJSON());       //2026-02-02T11:55:46.091Z
// console.log(typeof myDate);     //objecct

// //to create a specific date
// let myCreatedDate=new Date(2026,0,23);
// console.log(myCreatedDate.toDateString());      //Fri Jan 23 2026

// let myCreatedDate2=new Date(2026,0,23,6,5,4);
// console.log(myCreatedDate2.toLocaleString());   //23/1/2026, 6:05:04 am

// //timestamps
// let myTimeStamp= Date.now();
// console.log(myTimeStamp);   //1735753546091(milliseconds from 1 jan 1970 to now)
// console.log(myCreatedDate.getTime());       //1769106600000
// console.log(Math.floor(Date.now()/1000));

// let newDate=new Date();
// console.log(newDate);      //2026-02-07T04:31:49.007Z
// console.log(newDate.getFullYear()); //2026
// console.log(newDate.getDay());  //6(saturday)
//  console.log(`${newDate.getDay()}`);

//imp
newDate.toLocaleString('default',{
weekday:"long"   
})
