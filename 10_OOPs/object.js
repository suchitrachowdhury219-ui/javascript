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
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
    
}
const chai=new createUser("chai",25);
const tea=new createUser("tea",250);

//chai.printMe();     //score is undefined as we haven't defined the printMe method for the createUser function (without  new keyword)
chai.printMe();         //25
tea.printMe();          //250

/*
here's what happens behind the scene of new keyword is used:

A new  object is created: The new keyword  initiates the creation 
of a new Javascript object. This object is an instance of the function's prototype.

A prototype is linked: the newly created object gets linked to the prototype property of
 the constructor function.this means it has access to the properties and methods defined 
 on the constructor's prototype.

 The constructor is called : The constructor function is called with the specified
  arguments and this is bound to the newly  created object. If no explicit return 
  value is specified from the constructor,Javascript assumes this,the newly created object, 
  to be the intended return value.

  The new object is returned: After the constructor function has been called , if it doesn't return a non-primitive value (object,array,function,etc.),the newly created object is returned.

  */