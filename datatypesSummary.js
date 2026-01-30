//primitive datatypes
//call by value

//7 types : String,Number,Boolean,Null,undefined,Symbol,BigInt

const name="sam";
const scoreValue=100.3;
const isLoggedIn=true;
const outsideTemp=null;

let userEmail;  //let userEmail=undefined;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id==anotherId);

const bigNumber=2314377263456879809n;


//non-primitive datatype  (reference type)
//Arrays,Objects,Functions

const heros=["ironman","captainAmerica","blackWidow","Hulk"];

let myObj= {
    name:"suchitra",
    age:21,
}

const myFunction =function(){
    console.log("hello world");
}

console.log(typeof bigNumber); //Bigint


//**************************MEMORY*********************************

//Stack (primitive)     call by value        //isme u get a copy
//Heap(non-primitive)   call by reference   //isme u get a reference

let myYoutubename="suchitrachowdhury.com";
let anotherName=myYoutubename;
console.log(anotherName);  //suchitrachowdhury.com
//u are given a copy not the original so the value u store is storeed in copy therefore the original value won't change
anotherName="chaiAurCode";
console.log(anotherName);   //chaiAurCode

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo= userOne;
userTwo.email="hitesh@google.com";  //all properties of object are accsessed by(.) operator

console.log(userOne.email);
console.log(userTwo.email);

 

