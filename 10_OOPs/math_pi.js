// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);

/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/

// console.log(Math.PI);
// Math.PI=5;          //we can't overwrite 
// console.log(Math.PI);

const mynewObject=Object.create(null)
const chai={
    name:'ginger chai',
    price:100,
    isAvailable:true,
    orderChai: function (){
      console.log("chai nhi bani");
      
    }
}
// console.log(chai);      //{ name: 'ginger chai', price: 100, isAvailable: true }

// console.log(Object.getOwnPropertyDescriptor(chai));   //undefined
// Object.getOwnPropertyDescriptor is used to get the property descriptor of a specific property of an object. It takes two arguments: the object and the name of the property. It returns an object that describes the attributes of the specified property, such as its value, whether it is writable, enumerable, and configurable.
//gives u description about the properties like name, price etc not the object so the above is undefined 

//console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/*{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}*/

//u can define ur own object properties using Object.defineProperty
// Object.defineProperty(chai,'name',{
//   writable :false,
//   enumerable :false
// })

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/*{
  value: 'ginger chai',
  writable: false,
  enumerable:false,
  configurable: true
} */


  //loop ->forof loop->easy for objects
  for (const [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
      console.log(`${key} : ${value}`);
    }
      }
  //objects byDefault are not itertable  so we can't use for of loop directly on objects but we can use Object.entries to get an array of key value pairs and then we can use for of loop to iterate over that array. also here we use if confition so that we can skip the function property and only print the key value pairs of the object.

  //if we want to make the function property also iterable then we can use Object.defineProperty to make it enumerable true and then we can use for of loop to iterate over that property as well. but in this case we have made it false so it will not be iterated over.
