//singleton (only one instance of the class can be created)
//object.create() method is used to create a new object and it takes an object as an argument and returns a new object which is linked to the prototype of the object passed as an argument
//(constuctor method)

//object literals 
const mySym=Symbol("key1");

const Jsuser={              //{} are the object
    name:"suchitra",
    "full Name":"suchitra chowdhury",
    [mySym]:"mykey1",
    age:20,
    location:"Rourkela",
    email:"suchitrchowdhury219@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}  ;

//2 ways to access the object
// console.log(Jsuser.email);      //suchitrchowdhury219@gmail.com
// console.log(Jsuser["email"]);           //begind the track the keys are treated as string (preffered)

// console.log(Jsuser["full Name"]); //u can't access the value using (.) operator
// console.log(Jsuser[mySym]);

/*Q1.take a symbol,add it as a key in object and print it???
define a key->                  const mySym=Symbol("key1");
taking it inside the object->   [mySym]:"mykey1"
print it->                      console.log(Jsuser[mySym]);
*/

// Jsuser.email="suchitra62@gmail.com"; //to overwrite the value
// Object.freeze(Jsuser);              //to prevent it from further any changes
// Jsuser.email="hiteshchatgpt@gmail.com";
// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello Js user!!");
}

Jsuser.greeting2=function(){
   console.log(`HEllo Js user,${this.name}`);
   
    
}
// console.log(Jsuser.greeting);   //[Function (anonymous)]
// console.log(Jsuser.greeting());     //Hello Js user!!

 console.log(Jsuser.greeting2());       //HEllo Js user,suchitra

 


