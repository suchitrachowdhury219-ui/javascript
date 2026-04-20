function multiplyBy5(num){
    return num*5
}
console.log(multiplyBy5(10));     //50
console.log(multiplyBy5.power);     //undefined as we haven't defined any property called power for the function multiplyBy5
console.log(multiplyBy5.prototype);     //{} as we haven't defined any property for the function multiplyBy5 but it is an object and it has a prototype property which is an empty object by default

//In JavaScript, functions are first-class objects, which means they can have properties and methods just like any other object. When you define a function, it automatically gets a prototype property, which is an object that can be used to add properties and methods to the function. However, if you haven't added any properties or methods to the function, the prototype will be an empty object by default.

function createUser(username,score){
this.username=username;
this.score=score;
}
