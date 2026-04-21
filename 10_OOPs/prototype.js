let myName="suchitra      ";

// console.log(myName.trim().length);          //8

//console.log(myName.truelength());

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}
Array.prototype.heysuchitra=function(){
    console.log(`Suchitra says hii!!`);
}
// heroPower.hitesh();
myHeros.hitesh();       //as we have added the hitesh method to the Object prototype,
// it is now available to all objects in JavaScript, including  arrays like myHeros.

myHeros.heysuchitra();
//heroPower.heysuchitra(); it will show error as we have added the heysuchitra method to the Array prototype, it is now available to all arrays in JavaScript, but not to other objects like heroPower. but heroPower.hitesh(); it will work as we have added the hitesh method to the Object prototype, it is now available to all objects in JavaScript, including  heroPower.

//  beacause everything in JavaScript is an object, and all objects inherit from the Object prototype, which means that any method added to the Object prototype will be available to all objects in JavaScript.

//Inheritance

const user={
    name:"suchitra",
    email:"suchitra@example.com"
}
const Teacher={
    makeVideo:true 
}
const teachingsupport={
    isAvailable:false
}
const TAsupport={
    makeAssignment:'JS asssignment',
    fulltime:true
    // __proto__:teachingsupport
}
Teacher.__proto__=user;     //Teacher is inheriting from user

//modern Syntax
Object.setPrototypeOf(teachingsupport, Teacher)

let anotherUsername="ChaiAurCode  "
String.prototype.truelength=function(){
    console.log(`${this}`); 
    //console.log(`${this.name}`); //undefined      ( as obs property)
    console.log(`true length is : ${this.trim().length}`);    
}

anotherUsername.truelength();       //true length is : 11
"suchitra  ".truelength();            //true length is: 8




