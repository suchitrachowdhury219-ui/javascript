// const tinderUser=new Object()
const tinderUser={}

tinderUser.Id="123ab"
tinderUser.Name="sam"
tinderUser.isLoggedIN=false
// console.log(tinderUser);            //{ Id: '123ab', Name: 'sam', isLoggedIN: false }

const regularUser={
    email:"suchitra21@gmail.com",
    fullName: {
        userFullName: {
            firstName:"suchitra",
            lastName:"chowdhury"
        }
    }
}
// console.log(regularUser.fullName);  //{ userFullName: { firstName: 'suchitra', lastName: 'chowdhury' } }  
// console.log(regularUser.fullName.userFullName);    //{ firstName: 'suchitra', lastName: 'chowdhury' }
// console.log(regularUser.fullName.userFullName.firstName);   // suchitra

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2};     //same prpblem object inside object
// console.log(obj3);      //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4=Object.assign(obj1,obj2);  //important  // could be Object.assign({},obj1,obj2);
// console.log(obj4);      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5={...obj1,...obj2};       //spread
// console.log(obj5);                  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"ab@gmail.com"
    },
    {
        id:3,
        email:"and@gmail.com"
    }
]
users[1].email;
// console.log(tinderUser);        //{ Id: '123ab', Name: 'sam', isLoggedIN: false }

// console.log(Object.keys(tinderUser));       //[ 'Id', 'Name', 'isLoggedIN' ]
//datatype->array
// console.log(Object.values(tinderUser));     //[ '123ab', 'sam', false ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));       //false
//hasOwnProperty Determines whether an object has a property with the specified name.





