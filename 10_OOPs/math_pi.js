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
    isAvailable:true
}
console.log(chai);
