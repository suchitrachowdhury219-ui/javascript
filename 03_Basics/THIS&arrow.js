const user={
    username:"hitesh",
    price:299,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);        //this=>when u refers to current context
        console.log(this);
        
    }
}

// user.welcomeMessage();      
// user.username="sam";
// user.welcomeMessage();

//  console.log(this);         //{} as there is no context in global
//in browser global object is window object  *imp

// function chai(){
//     let username="hitesh";
//     console.log(this.username);     //this works under objects not functions
// }
// chai();

const chai=() => {
    let username="hitesh"
    console.log(this); 
}
chai();     //{}

/*explicit return->use {} and return
basic arrow function declaration 
const addTwo=(num1,num2)=>{
return num1+num2;
}*/

/*implicit return
2 types
const addTwo=(num1,num2) => num1+num2;

 const addTwo=(num1,num2) => (num1+num2);
console.log(addTwo(3,4));           //7     */


const addTwo=(num1,num2) =>({username:"hitesh"})   //return object  { username: 'hitesh' }


const myArray=[2,4,7,8,9];
// myArray.forEach(() => {})
