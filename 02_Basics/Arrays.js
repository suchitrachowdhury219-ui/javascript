//Arrays

const myArr=[0,1,2,3,4,5]; //it is an object for storing elements enclosed between [] in asingle variable
//it is resizable
// console.log(myArr[3]);  //zero based indexing

const myArr2=new Array(1,2,3,4); //can be defined in this way too
//Array Methods

// myArr.push(6) //push is used to insert elements in an arrray
// myArr.push(7)
// console.log(myArr);

// myArr.pop() //pop is used to delete the last element
// console.log(myArr); 

// myArr.unshift(9)  //to insert element in the beginning
// console.log(myArr);

// myArr.shift();   //remove element inserted using unshift()
// console.log(myArr);

// console.log(myArr.includes(8));   //false
// console.log(myArr.indexOf(17));  //-1

// const newArr=myArr.join();
// console.log(myArr);     //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);    //0,1,2,3,4,5
// console.log(typeof newArr);  //string

//slice,splice
console.log("A ",myArr);

const myn1=myArr.slice(1,3);      //[1,2]      //doesn't include the last element and does not manipulate the original string
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);      //[1,2,3]
console.log("C",myArr);//[0,4,5]




